define(function() {
    "use strict";

    require("./skin/base.css");
    require("./skin/layout.css");

    var template = require("./cmp.html");

    var Loading = require("./ui/loading/loading.js");

    var Util = require("./core/util.js");

    var ViewBase = require("./core/view.base.js");

    var defaultConfig = require("./config/config.js");


    var CMPList = require("./list/list.js");

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

            this.uid = "cmp_" + Util.token(8);

            this.container.addClass("cmp " + this.uid).empty();

            $(template).appendTo(this.container);

            this.loading = new Loading();
            this.loading.setContainer(this.container);

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
            this.audio.autoplay = false;
            this.audio.loop = false;
            this.audio.preload = true;
            this.audio.controls = true;

            this.$audio.bind("timeupdate", function(e) {
                //console.log(e.timeStamp);
            });
            this.$audio.bind("ended", function(e) {
                self.cmpList.next();
            });
            this.$audio.bind("error", function(e) {
                self.cmpList.next();
            });

            this.$video = this.find(".cmp_video");


        },

        loadItem: function(item) {

            //console.log(item);

            this.showTitle(item.label);

            try {
                this.audio.src = item.src;
            } catch (e) {

            }
            this.audio.play();

        },


        play: function(index) {

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