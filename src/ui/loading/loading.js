define(function() {
    "use strict";

    var ViewBase = require("../../core/view.base.js");

    require("./loading.css");
    var template = require("./loading.html");

    var Loading = ViewBase.extend({

        visible: false,

        constructor: function() {

        },

        create: function() {

            this.elem = $(template).appendTo(this.container);

            this.mask = this.elem.find(".loading_mask");
            this.main = this.elem.find(".loading_main");
            this.text = this.elem.find(".loading_text");
        },

        setText: function(text) {
            text = text || "";
            if (this.text) {
                this.text.html(text);
            }
            return this;
        },

        show: function(text) {

            if (!this.container) {
                return this;
            }

            if (!this.elem) {
                this.create();
            }

            this.elem.show();
            this.setText(text);

            return this;
        },

        hide: function() {
            this.elem.hide();
            this.setText("");
            return this;
        },


        toString: function() {
            return "[object Loading]";
        }
    });

    return Loading;

});