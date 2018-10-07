var EventUtil = require("./event-util.js");

class EventBase {

    constructor() {
        this.maxListeners = 10;
    }

    setMaxListeners(n) {
        this.maxListeners = Number(n) || 10;
    }

    getMaxListeners() {
        return this.maxListeners;
    }

    getEventListeners() {
        if (!this.eventListeners) {
            this.eventListeners = {};
        }
        return this.eventListeners;
    }

    //=======================================================

    bind(types, handler, option) {
        var eventList = EventUtil.getEventList(this, types, handler, option);
        if (!eventList.length) {
            return this;
        }
        var eventListeners = this.getEventListeners();
        EventUtil.addEvents(eventListeners, eventList, this.maxListeners);
        return this;
    }

    on() {
        return this.bind.apply(this, arguments);
    }

    //=======================================================

    one(types, handler) {
        this.bind(types, handler, {
            one: true
        });
        return this;
    }

    once() {
        return this.one.apply(this, arguments);
    }

    //=======================================================

    delegate(selector, types, handler) {
        this.bind(types, handler, {
            delegate: selector
        });
        return this;
    }

    //=======================================================

    unbind(types, handler, option) {
        var eventListeners = this.getEventListeners();
        if (!arguments.length) {
            EventUtil.removeAllEvents(eventListeners);
            return this;
        }
        var eventList = EventUtil.getEventList(this, types, handler, option);
        if (!eventList.length) {
            return this;
        }
        EventUtil.removeEvents(eventListeners, eventList);
        return this;
    }

    off() {
        return this.unbind.apply(this, arguments);
    }

    //=======================================================

    trigger(type, data) {
        var eventListeners = this.getEventListeners();
        EventUtil.sendEvent(this, eventListeners, type, data);
        return this;
    }

    emit() {
        return this.trigger.apply(this, arguments);
    }

    //=======================================================

    toString() {
        return "[object EventBase]";
    }

}

module.exports = EventBase;