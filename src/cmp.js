define(function() {
    "use strict";

    require("./cmp.css");
    var template = require("./cmp.html");

    var Util = require("./core/util.js");

    var ViewBase = require("./core/view.base.js");

    var defaultConfig = require("./default.config.js");


    var CMPList = require("./cmp.list.js");

    var CMP = ViewBase.extend({

        constructor: function(container) {
            if (arguments.length) {
                this.setContainer(container);
            }
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

        create: function() {

            var self = this;

            this.container.addClass("cmp5").empty();

            $(template).appendTo(this.container);

            this.showTitle();

            this.$list = this.find(".cmp_list");
            this.cmpList = new CMPList();
            this.cmpList.bind("change", function(e, item) {
                self.loadItem(item);
            });
            this.cmpList.draw({
                container: this.$list,
                list: this.list
            });


            this.$audio = this.find(".cmp_audio");
            this.audio = this.$audio.get(0);

            this.$video = this.find(".cmp_video");

        },

        loadItem: function(item) {

            console.log(item);

            this.showTitle(item.label);

            this.audio.src = item.src;

        },


        play: function(index) {

            console.log("play ...")

            if (!this.player) {
                this.create();
            }

        },

        showTitle: function(title) {

            if (!title) {
                title = this.config.name;
            }

            this.find(".cmp_title").html(title);
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