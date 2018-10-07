var Event = require("./event.js");
var Util = require("./util.js");


var EventUtil = {

    specials: {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },

    removeElementEvent: function(event) {
        if (!event) {
            return;
        }
        var target = event.target;
        if (!target.Query) {
            return;
        }
        target.each(function(node) {
            if (node && node.removeEventListener) {
                node.removeEventListener(event.proxyType || event.type, event.proxyHandler);
            }
        });
    },

    addElementEvent: function(event) {
        var target = event.target;
        if (!target.Query) {
            return;
        }
        target.each(function(node) {
            if (node && node.addEventListener) {
                node.addEventListener(event.proxyType || event.type, event.proxyHandler);
            }
        });
    },

    sendElementEvent: function(target, type, data) {

        type = this.specials[type] || type;

        var canBubble = true;
        var cancelable = true;

        target.each(function(node) {
            if (node && node.dispatchEvent) {
                var event = document.createEvent("HTMLEvents");
                event.initEvent(type, canBubble, cancelable);
                if (data) {
                    Object.keys(data).forEach(function(k) {
                        if (typeof(event[k]) === "undefined") {
                            event[k] = data[k];
                        }
                    });
                }
                node.dispatchEvent(event);
            }
        });

    },

    //=======================================================

    removeProxyEventByOne: function(event) {
        if (!event.one) {
            return;
        }

        var target = event.target;
        var eventListeners = target.getEventListeners();
        var eventListener = eventListeners[event.type];
        if (!eventListener) {
            return;
        }
        var newEvents = [];
        eventListener.events.forEach(function(item) {
            if (item !== event) {
                newEvents.push(item);
            } else {
                EventUtil.removeElementEvent(item);
            }
        });
        eventListener.events = newEvents;
    },

    sendProxyEvent: function(event, customEvent) {

        if (event.proxyTypeHandler) {
            var passed = event.proxyTypeHandler(customEvent);
            if (!passed) {
                return;
            }
        }

        event.handler.call(event.target, new Event(customEvent), customEvent.originalEvent);
        EventUtil.removeProxyEventByOne(event);
    },

    delegateHandler: function(event, customEvent) {
        var node = customEvent.originalEvent.target;
        var $delegates = event.target.find(event.delegate);
        var container = $delegates.contains(node);
        if (!container) {
            return;
        }
        customEvent.currentTarget = container;
        customEvent.delegateTarget = event.target;
        EventUtil.sendProxyEvent(event, customEvent);
    },

    setSpecialEvent: function(event) {

        var special = this.specials[event.type];
        if (!special) {
            return;
        }

        event.proxyType = special;
        //for hover
        event.proxyTypeHandler = function(e) {
            var target = e.currentTarget;
            var related = e.relatedTarget;
            //No relatedTarget if the mouse left/entered the browser window
            //or related is outside the target 
            if (!related || (related !== target && !Util.contains(target, related))) {
                //console.log("hover", special);
                return true;
            }

            return false;
        };

    },

    getCustomEvent: function(e) {
        var customEvent = {
            originalEvent: e,
            data: e
        };
        var list = [
            "type",
            "target",
            "currentTarget",
            "relatedTarget",

            "keyCode",
            "shiftKey",
            "ctrlKey",
            "altKey",
            "metaKey",

            "detail",
            "which",

            "pageX",
            "pageY"
        ];
        list.forEach(function(k) {
            customEvent[k] = e[k];
        });
        return customEvent;
    },

    getEventItem: function(target, context, handler, option) {
        context += "";
        if (!context) {
            return null;
        }

        option = option || {};
        var arr = context.split(".");
        var type = arr.shift();
        var namespace = arr.join(".");

        var event = {
            type: type,
            target: target,
            context: context,
            namespace: namespace,
            handler: handler,
            one: option.one,
            prepend: option.prepend,
            delegate: option.delegate,
            defaultEvent: option.defaultEvent,
            proxyHandler: function(e) {
                var customEvent = EventUtil.getCustomEvent(e);
                if (event.delegate && event.target.Query) {
                    EventUtil.delegateHandler(event, customEvent);
                    return;
                }
                EventUtil.sendProxyEvent(event, customEvent);
            }
        };

        EventUtil.setSpecialEvent(event);

        return event;
    },

    getEventListByString: function(target, types, handler, option) {
        var list = [];
        var arr = types.split(" ");
        arr.forEach(function(type) {
            var eventItem = EventUtil.getEventItem(target, type, handler, option);
            if (eventItem) {
                list.push(eventItem);
            }
        });
        return list;
    },

    getEventListByObject: function(target, types, option) {
        var list = [];
        var keys = Object.keys(types);
        keys.forEach(function(type) {
            var eventItem = EventUtil.getEventItem(target, type, types[type], option);
            if (eventItem) {
                list.push(eventItem);
            }
        });
        return list;
    },

    getEventList: function(target, types, handler, option) {
        if (!types) {
            return [];
        }

        if (typeof(types) === "string") {
            return EventUtil.getEventListByString(target, types, handler, option);
        }

        if (typeof(types) === "object") {
            return EventUtil.getEventListByObject(target, types, handler);
        }

        return [];
    },

    //=======================================================

    addEvent: function(eventListener, event, maxListeners) {
        if (event.defaultEvent) {
            eventListener.defaultEvent = event;
            EventUtil.addElementEvent(event);
            return;
        }
        if (eventListener.events.length >= maxListeners) {
            var msg = "Possible Event memory leak detected. ";
            msg += "More than " + maxListeners + " (max limit) listeners added. ";
            msg += "Use setMaxListeners(n) to increase limit.";
            console.warn(msg);
            return;
        }
        if (event.prepend) {
            eventListener.events.unshift(event);
        } else {
            eventListener.events.push(event);
        }
        EventUtil.addElementEvent(event);
    },

    addEvents: function(eventListeners, eventList, maxListeners) {
        eventList.forEach(function(event) {
            var type = event.type;
            if (typeof(eventListeners[type]) === "undefined") {
                eventListeners[type] = {
                    events: [],
                    defaultEvent: null
                };
            }
            var handler = event.handler;
            if (typeof(handler) !== "function") {
                return;
            }
            var eventListener = eventListeners[type];
            EventUtil.addEvent(eventListener, event, maxListeners);
        });
    },

    //=======================================================

    removeEventByDefault: function(eventListeners, type) {
        var eventListener = eventListeners[type];
        if (!eventListener) {
            return;
        }
        if (eventListener.defaultEvent) {
            EventUtil.removeElementEvent(eventListener.defaultEvent);
            eventListener.defaultEvent = null;
        }
    },

    removeEventByNamespace: function(eventListeners, namespace) {
        var types = Object.keys(eventListeners);
        types.forEach(function(type) {
            var eventListener = eventListeners[type];
            var newEvents = [];
            eventListener.events.forEach(function(item) {
                if (item && item.namespace !== namespace) {
                    newEvents.push(item);
                } else {
                    EventUtil.removeElementEvent(item);
                }
            });
            eventListener.events = newEvents;
        });
    },

    removeEventByHandler: function(eventListeners, type, handler) {
        var eventListener = eventListeners[type];
        if (!eventListener) {
            return;
        }
        var newEvents = [];
        eventListener.events.forEach(function(item) {
            if (item && item.handler !== handler) {
                newEvents.push(item);
            } else {
                EventUtil.removeElementEvent(item);
            }
        });
        eventListener.events = newEvents;
    },

    removeEventByType: function(eventListeners, type) {
        var eventListener = eventListeners[type];
        if (!eventListener) {
            return;
        }

        //remove event list by whole type
        eventListener.events.forEach(function(item) {
            EventUtil.removeElementEvent(item);
        });
        eventListener.events = [];

        //if no default should be remove all
        if (!eventListener.defaultEvent) {
            delete eventListeners[type];
        }
    },

    removeEventByOne: function(eventListener) {
        var newEvents = [];
        eventListener.events.forEach(function(item) {
            if (item && !item.one) {
                newEvents.push(item);
            } else {
                EventUtil.removeElementEvent(item);
            }
        });
        eventListener.events = newEvents;
    },

    removeEvent: function(eventListeners, event) {
        var type = event.type;
        if (event.defaultEvent) {
            EventUtil.removeEventByDefault(eventListeners, type);
            return;
        }
        var namespace = event.namespace;
        if (!type && namespace) {
            EventUtil.removeEventByNamespace(eventListeners, namespace);
            return;
        }
        var handler = event.handler;
        if (typeof(handler) === "function") {
            EventUtil.removeEventByHandler(eventListeners, type, handler);
            return;
        }
        EventUtil.removeEventByType(eventListeners, type);
    },

    removeEvents: function(eventListeners, eventList) {
        eventList.forEach(function(event) {
            EventUtil.removeEvent(eventListeners, event);
        });
    },

    removeAllEvents: function(eventListeners) {
        var types = Object.keys(eventListeners);
        types.forEach(function(type) {
            EventUtil.removeEventByType(eventListeners, type);
        });
    },

    //=======================================================

    sendEventList: function(target, eventListener, event, data) {

        //call each handler if not stopped
        var events = eventListener.events;
        for (var i = 0; i < events.length; i++) {
            var item = events[i];
            event.handleObj = item;
            event.namespace = item.namespace;
            item.handler.call(target, event, data);
            if (event.isPropagationStopped) {
                break;
            }
        }

        EventUtil.removeEventByOne(eventListener);

    },

    sendEventDefault: function(target, eventListener, event, data) {
        var defaultEvent = eventListener.defaultEvent;
        if (!defaultEvent || event.isDefaultPrevented) {
            return;
        }
        defaultEvent.handler.call(target, event, data);
    },

    sendEvent: function(target, eventListeners, type, data) {
        if (!type) {
            return;
        }
        if (typeof(type) === "object") {
            data = type;
            type = data.type;
        }

        //element event
        if (target.Query) {
            EventUtil.sendElementEvent(target, type, data);
            return;
        }

        //custom event
        var eventListener = eventListeners[type];
        if (!eventListener) {
            return;
        }
        var event = new Event({
            type: type,
            target: target,
            currentTarget: target,
            data: data
        });
        EventUtil.sendEventList(target, eventListener, event, data);
        EventUtil.sendEventDefault(target, eventListener, event, data);
    }

};


module.exports = EventUtil;