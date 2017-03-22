define(function() {
    "use strict";

    var Util = require("./core/util.js");

    var EventBase = require("./core/event-base.js");

    var defaultConfig = require("./default-config.js");

    require("./cmp5.css");
    var template = require("./template.html");

    var CMP = EventBase.extend({

        constructor: function(container) {
            if (arguments.length) {
                this.setContainer(container);
            }
        },

        setContainer: function(container) {
            this.container = $(container).addClass("cmp5");
            return this;
        },

        setConfig: function(config) {
            this.config = Util.merge({}, defaultConfig, config);
            return this;
        },

        setList: function(list) {
            if (!Util.islist(list)) {
                return this;
            }
            this.list = list;
        },

        play: function(index) {

            console.log(111);

            $(template).appendTo(this.container);

        },

        toString: function() {
            return "[object CMP]";
        }

    });


    var cmp5 = {

        CMP: CMP

    };

    return cmp5;

});