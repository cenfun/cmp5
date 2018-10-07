require("../skin/base.scss");
require("../skin/layout.scss");

var template = require("./cmp.html");

var $ = require("../core/query.js");

var Loading = require("../ui/loading/loading.js");

var Util = require("../core/util.js");

var ViewBase = require("../core/view-base.js");

var defaultConfig = require("../config/config.js");

var CMPList = require("../list/list.js");

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


    }

    loadItem(item) {

        //console.log(item);

        this.showTitle(item.label);

        try {
            this.audio.src = item.src;
        } catch (e) {
            this.cmpList.next();
            return;
        }
        this.audio.play();

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

        this.find(".cmp_title").html(title);
    }

    toString() {
        return "[object CMP]";
    }

}




module.exports = CMP;