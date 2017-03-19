define(function() {
    "use strict";
    /**
     * @build 2011.11.30
     * @author Kevin Zhu
     */
    var $ = window.$;
    var Extend = require("./extend.js");
    //====================================================================================================
    /**
     * @constructor
     * @returns {EventBase}
     */
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
            //use triggerHandler replace trigger to stop default events
            return dispatcher.triggerHandler.apply(dispatcher, arguments);
        }
    });

    return EventBase;

});
