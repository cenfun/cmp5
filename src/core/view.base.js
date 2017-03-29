define(function() {
    'use strict';

    var EventBase = require("./event.base.js");

    var ViewBase = EventBase.extend({

        //================================
        //container display
        holder: null,
        container: null,
        containerAutoResize: true,

        width: 0,
        height: 0,
        visible: true,

        constructor: function() {

        },

        //================================
        getContainer: function() {
            return this.container;
        },
        setContainer: function(container) {
            this.container = $(container);
            return this;
        },

        //================================
        //size api
        setSize: function() {
            if (!this.container) {
                return this;
            }
            var newSize = this.getNewSize.apply(this, arguments);
            var nw = newSize.width;
            var nh = newSize.height;
            if (this.width !== nw || this.height !== nh) {
                this.width = nw;
                this.height = nh;
                this.setSizeNow();
            }
            return this;
        },

        getNewSize: function() {
            var w = this.width;
            var h = this.height;
            if (arguments.length) {
                var nw = Math.round(arguments[0]);
                if (nw >= 0) {
                    w = nw;
                }
                if (arguments.length > 1) {
                    var nh = Math.round(arguments[1]);
                    if (nh >= 0) {
                        h = nh;
                    }
                }
            } else {
                w = this.container.width();
                h = this.container.height();
            }
            return {
                width: w,
                height: h
            };
        },

        setSizeNow: function() {
            if (!this.containerAutoResize) {
                this.container.width(this.width).height(this.height);
            }
            this.trigger("resize");
            return this;
        },

        //get and update current size base on container
        getSize: function(holder) {
            var elem = $(holder || this.container);
            var width = elem.width();
            var height = elem.height();
            var offset = elem.offset();
            if (!holder) {
                //update for owner
                this.width = width;
                this.height = height;
                this.offset = offset;
            }
            return {
                width: width,
                height: height,
                offset: offset
            };
        },
        //================================
        //visible api
        show: function() {
            if (this.container) {
                this.container.show();
            }
            this.visible = true;
            this.trigger("display", true);
            return this;
        },
        hide: function() {
            this.visible = false;
            if (this.container) {
                this.container.hide();
            }
            this.trigger("display", false);
            return this;
        },
        //================================
        //remove api
        beforeRemove: function() {
            //override
            return this;
        },
        remove: function() {
            this.beforeRemove();
            this.hide();
            this.unbind();
            return this;
        },
        destroy: function() {
            this.remove();
            if (this.container) {
                this.container.remove();
                this.container = null;
            }
        },

        //================================
        //common api
        //find child from current container
        find: function(context, container) {
            return $(container || this.container).find(context);
        },
        contains: function(container, target) {
            container = $(container).get(0);
            target = $(target).get(0);
            //(container, target);
            if (!container || !target) {
                return false;
            }
            return $.contains(container, target);
        },

        //class print
        toString: function() {
            return "[object ViewBase]";
        }
    });

    return ViewBase;

});