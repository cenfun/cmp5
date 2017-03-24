define(function() {

    "use strict";

    var E = {
        MOUSEDOWN: "mousedown",
        MOUSEMOVE: "mousemove",
        MOUSEUP: "mouseup",
        //drag
        DRAG_BEFORE: "drag_before",
        DRAG_START: "drag_start",
        DRAG_UPDATE: "drag_update",
        DRAG_COMPLETE: "drag_complete"
    };
    var Util = require("./util.js");

    var EventBase = require("./event.base.js");

    //====================================================================================================
    /**
     * @constructor
     * @returns {Drag}
     */

    var Drag = EventBase.extend({

        E: E,
        draging: false,

        constructor: function() {
            this.init();
        },

        defaultOption: function() {
            return {
                mouseStartX: 0,
                mouseStartY: 0,
                mousePreviousX: 0,
                mousePreviousY: 0,
                mouseCurrentX: 0,
                mouseCurrentY: 0,
                mouseOffsetX: 0,
                mouseOffsetY: 0,
                mouseMoveX: 0,
                mouseMoveY: 0,
                valid: false,
                state: null
            };
        },

        setOption: function(option) {
            this.option = $.extend(this.defaultOption(), option);
            return this;
        },

        init: function() {
            this.setOption({});
            return this;
        },

        start: function(e, target) {
            this.init();

            this.option.target = target || $(e.currentTarget);

            var self = this;
            //namespace event type for mouse move
            var MOUSEMOVE = E.MOUSEMOVE + ".t" + Util.token();
            var holder = $(window);
            //only one so no need ns events
            holder.one(E.MOUSEUP, function(e) {
                holder.unbind(MOUSEMOVE);
                self.dragCompleteHandler(e);
            });
            //namespaces events
            holder.bind(MOUSEMOVE, function(e) {
                self.dragUpdateHandler(e);
            });
            //
            this.dragStartHandler(e);
            return this;
        },

        dragStartHandler: function(e) {
            this.updateOption(e);
            var o = this.option;
            //start position
            o.mouseStartX = e.pageX;
            o.mouseStartY = e.pageY;
            //mouse down but not drag start because the positon do not change
            o.state = null;
            this.trigger(E.DRAG_BEFORE, e);
            return this;
        },

        dragUpdateHandler: function(e) {
            this.updateOption(e);
            var o = this.option;
            //get drag state
            if (o.state) {
                //drag when mouse move after drag start
                o.state = E.DRAG_UPDATE;
            } else {
                //drag start when mouse move first time 
                o.state = E.DRAG_START;
                this.draging = true;
            }
            this.trigger(o.state, e);
            return this;
        },

        dragCompleteHandler: function(e) {
            this.updateOption(e);
            var o = this.option;
            //drag complete when mouse up
            o.state = E.DRAG_COMPLETE;
            this.draging = false;
            this.trigger(o.state, e);
            return this;
        },

        updateOption: function(e) {
            //stop default events
            //just for unselectable, but do not stopPropagation() by return false
            if (e.preventDefault) {
                e.preventDefault();
            }
            //get events
            var o = this.option;
            //keep previous position
            o.mousePreviousX = o.mouseCurrentX || e.pageX;
            o.mousePreviousY = o.mouseCurrentY || e.pageY;
            //current position
            o.mouseCurrentX = e.pageX;
            o.mouseCurrentY = e.pageY;
            //current offset from start
            o.mouseOffsetX = o.mouseCurrentX - o.mouseStartX;
            o.mouseOffsetY = o.mouseCurrentY - o.mouseStartY;
            //position nothing change
            o.valid = (o.mouseOffsetX === 0 && o.mouseOffsetY === 0) ? false : true;
            //current move offset from previous
            o.mouseMoveX = o.mouseCurrentX - o.mousePreviousX;
            o.mouseMoveY = o.mouseCurrentY - o.mousePreviousY;
            return this;
        },


        //class print
        toString: function() {
            return "[object Drag]";
        }

    });


    return Drag;

});