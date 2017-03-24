define(function() {
    "use strict";
    var Extend = require("./extend.js");
    var EventBase = Extend.extend({
        dispatcher: null,
        getDispatcher: function() {
            if (!this.dispatcher) {
                this.dispatcher = $(this);
            }
            return this.dispatcher;
        },
        bind: function() {
            var dispatcher = this.getDispatcher();
            dispatcher.bind.apply(dispatcher, arguments);
            return this;
        },
        one: function() {
            var dispatcher = this.getDispatcher();
            dispatcher.one.apply(dispatcher, arguments);
            return this;
        },
        unbind: function() {
            var dispatcher = this.getDispatcher();
            dispatcher.unbind.apply(dispatcher, arguments);
            return this;
        },
        trigger: function() {
            var dispatcher = this.getDispatcher();
            return dispatcher.triggerHandler.apply(dispatcher, arguments);
        }
    });
    return EventBase;

});