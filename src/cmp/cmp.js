require("../skin/base.scss");
require("../skin/layout.scss");

var template = require("./cmp.html");

var $ = require("../core/query.js");

var Loading = require("../ui/loading/loading.js");

var Util = require("../core/util.js");

var ViewBase = require("../core/view-base.js");

var defaultConfig = require("../config/config.js");

var CMPList = require("../list/list.js");
var CMPMixer = require("../mixer/mixer.js");

class CMP extends ViewBase {

    constructor(container) {
        super();
        if (arguments.length) {
            this.setContainer(container);
        }
    }

    setConfig(config) {
        this.config = Util.merge({}, defaultConfig, config);
        return this;
    }

    setList(list) {
        if (!Util.islist(list)) {
            return this;
        }
        this.list = list;
    }

    create() {

        this.uid = "cmp_" + Util.token(8);

        this.container.addClass("cmp " + this.uid).empty();

        $(template).appendTo(this.container);

        this.loading = new Loading();
        this.loading.setContainer(this.container);

        this.showTitle();

        this.createAudio();

        this.createVideo();

        this.createMixer();

        this.createList();

    }

    createAudio() {
        this.$audio = this.find(".cmp-audio");
        this.audio = this.$audio.get(0);
        this.audio.autoplay = false;
        this.audio.loop = false;
        this.audio.preload = true;
        this.audio.controls = true;

        var self = this;
        this.$audio.bind("timeupdate", function(e) {
            //console.log(e.timeStamp);
        });
        this.$audio.bind("ended", function(e) {
            self.cmpList.next();
        });
        this.$audio.bind("error", function(e) {
            self.loadItemError();
        });

    }

    createVideo() {
        this.$video = this.find(".cmp-video");
    }

    createMixer() {
        this.$mixer = this.find(".cmp-mixer");
        this.mixer = new CMPMixer(this.$mixer);
        this.mixer.draw({
            audio: this.audio
        });
    }

    createList() {
        this.$list = this.find(".cmp-list");
        this.cmpList = new CMPList(this.$list);

        var self = this;
        this.cmpList.bind("change", function(e, item) {
            self.loadItem(item);
        });
        this.cmpList.bind("ready", function() {
            if (self.config.autoplay) {
                self.cmpList.next();
            }
        });
        this.cmpList.draw({
            list: this.list
        });
    }

    loadItem(item) {

        //console.log(item);

        this.showTitle(item.label);

        try {
            this.audio.src = item.src;
            this.audio.play();
        } catch (e) {
            this.loadItemError();
            return;
        }

    }

    loadItemError() {
        var self = this;
        setTimeout(function() {
            self.cmpList.next();
        }, 1000);
    }

    play(index) {

        if (!this.player) {
            this.create();
        }

    }

    showTitle(title) {

        if (!title) {
            title = this.config.name;
        }

        this.find(".cmp-title").html(title);
    }

    resize() {

        if (this.mixer) {
            this.mixer.resize();
        }


    }

    toString() {
        return "[object CMP]";
    }

}




module.exports = CMP;