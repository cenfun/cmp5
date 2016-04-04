define(function() {
    "use strict";
    /**
     * @author Cenfun
     */
    var $ = window.$;

    //====================================================================================================
    /**
     * @constructor
     * @returns {EventBase}
     */
    var EventBase = function() {
        //depend on jQuery event
    };
    EventBase.prototype = {
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
            dispatcher.trigger.apply(dispatcher, arguments);
            return this;
        }
    };

    return EventBase;

});
