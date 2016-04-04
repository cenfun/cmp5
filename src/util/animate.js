define(function() {
    /**
     * @author Cenfun
     */
    'use strict';

    var S = require("./s.js");
    var E = require("./e.js");
    var T = require("./t.js");
    var EventBase = require("./event.js");
    var OptionBase = require("./option.js");

    var Easing = require('./easing.js');

    /**
     * @constructor
     * @param option
     * @returns {Animate}
     */
    var Animate = function() {
        this.initRequestAnimationFrame();
        if (arguments.length) {
            this.setOption.apply(this, arguments);
        }
    };
    Animate.prototype = {
        constructor: Animate,
        VERSION: "1.0.110821A",
        //if stopped then stop everything
        stopped: true,

        defaultOption: function() {
            return {
                //default is Easing.linear
                easing: null,
                //delay time before run
                delay: 0,
                //total time
                duration: 100,

                //from data
                from: 0,
                //till data
                till: 1,
                //current data(private)
                data: 0
            };
        },

        //init requestAnimationFrame
        initRequestAnimationFrame: function() {
            var pre = ["webkit", "moz", "ms"];
            for (var i = 0; i < pre.length; i++) {
                var item = pre[i];
                if (!window.requestAnimationFrame) {
                    window.requestAnimationFrame = window[item + "RequestAnimationFrame"];
                    window.cancelAnimationFrame = window[item + "CancelAnimationFrame"];
                }
            }
            // window.requestAnimationFrame diffrent params with window.setTimeout;
            if (!window.cancelAnimationFrame) {
                window.cancelAnimationFrame = window.clearTimeout;
            }
        },

        stop: function() {
            if (this.stopped) {
                return this;
            }
            //force to till info, but not call complete function
            if (arguments[0]) {
                this.update(this.option.till);
            }
            //stop everything now
            this.stopped = true;
            clearTimeout(this.timeout);
            cancelAnimationFrame(this.timeloop);
            this.trigger(E.ANIMATE_STOP);
            return this;
        },

        start: function() {
            if (arguments.length) {
                this.setOption.apply(this, arguments);
            }

            this.option = this.getOption();
            this.stopped = false;
            this.trigger(E.ANIMATE_BEFORE);

            var delay = T.tonum(this.option.delay, true);

            if (delay > 0) {
                var self = this;
                this.timeout = setTimeout(function() {
                    self.startNow();
                }, delay);
            } else {
                this.startNow();
            }
        },

        startNow: function() {
            //if call stop before delay time
            if (this.stopped) {
                return this;
            }
            //ready
            var o = this.option;
            o.duration = T.tonum(o.duration, true) || 100;
            if (typeof(o.easing) !== S.FUNCTION) {
                o.easing = Easing.linear;
            }
            //start callback, maybe cost musch time outside
            this.trigger(E.ANIMATE_START);
            //if call stop in start callback
            if (this.stopped) {
                return this;
            }

            //init start time
            this.time = null;

            this.runAnimation();

            return this;
        },

        runAnimation: function() {
            var self = this;
            if (requestAnimationFrame) {
                this.timeloop = requestAnimationFrame(function() {
                    self.loop();
                });
            } else {
                this.timeloop = setTimeout(function() {
                    self.loop();
                }, 16);
            }
            return this;
        },

        loop: function() {
            //if call stop in running
            if (this.stopped) {
                cancelAnimationFrame(this.timeloop);
                return this;
            }
            //====================================
            //update
            if (!this.time) {
                this.time = new Date().getTime();
            }
            var o = this.option;
            var now = new Date().getTime();
            var t = now - this.time;
            var d = o.duration;
            if (t < d) {
                var data = this.calculate(t, d, o.from, o.till, o.from);
                //update callback
                this.update(data);
                this.runAnimation();
                return this;
            }
            //====================================
            //finish
            cancelAnimationFrame(this.timeloop);
            //last time update callback
            this.update(o.till);
            //complete callback
            this.complete();
            return this;
        },
        //stop loop calculate if back to self
        calculate: function(t, d, from, till, self) {
            var animate = this;
            var calculate_array = function(t, d, from, till, self) {
                //if array
                var v = [];
                for (var i = 0, l = from.length; i < l; i++) {
                    if (till[i] === undefined || from[i] === self) {
                        v[i] = from[i];
                    } else {
                        v[i] = animate.calculate(t, d, from[i], till[i], self);
                    }
                }
                return v;
            };

            var calculate_object = function(t, d, from, till, self) {
                //if object
                var v = {};
                for (var k in from) {
                    if (till[k] === undefined || from[k] === self) {
                        v[k] = from[k];
                    } else {
                        v[k] = animate.calculate(t, d, from[k], till[k], self);
                    }
                }
                return v;
            };

            if (typeof(from) === S.OBJECT && typeof(till) === S.OBJECT) {
                if (from instanceof Array && till instanceof Array) {
                    return calculate_array(t, d, from, till, self);
                } else {
                    return calculate_object(t, d, from, till, self);
                }
            } else if (T.isnum(from) && T.isnum(till)) {
                //must be number
                var b = from;
                var c = till - b;
                return this.option.easing.call(this, t, b, c, d);
            } else {
                //just return from value if NOT number
                return from;
            }
        },

        update: function(data) {
            this.data = data;
            this.trigger(E.ANIMATE_UPDATE, data);
            return this;
        },

        complete: function() {
            this.trigger(E.ANIMATE_COMPLETE);
            return this;
        },

        toString: function() {
            return "[object Animate]";
        }
    };

    Animate.prototype = $.extend(new EventBase(), new OptionBase(), Animate.prototype);

    return Animate;

});
