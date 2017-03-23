define(function() {
    "use strict";

    require("./cmp.css");
    var template = require("./cmp.html");

    var Util = require("./core/util.js");

    var ViewBase = require("./core/view-base.js");

    var defaultConfig = require("./default-config.js");


    var CMPList = require("./cmp-list.js");

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

            this.$view = $(template).appendTo(this.container);

            this.$list = this.find(".cmp_list");
            this.cmpList = new CMPList();
            this.cmpList.bind("change", function(e, item) {
                self.loadItem(item);
            });
            this.cmpList.draw({
                container: this.$list,
                list: this.list
            });

            this.$media = this.find(".cmp_media");
            this.$audio = this.find(".cmp_audio");
            this.$video = this.find(".cmp_video");

        },

        loadItem: function(item) {

            console.log(item);

            this.$audio.attr("src", item.src);

        },


        play: function(index) {

            console.log("play ...")

            if (!this.player) {
                this.create();
            }



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