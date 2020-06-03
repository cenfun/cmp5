require("../skin/base.scss");
require("../skin/layout.scss");

var template = require("./cmp.html");

var $ = require("../core/query.js");

var Loading = require("../ui/loading/loading.js"); 

var Util = require("../core/util.js");

var ViewBase = require("../core/view-base.js");

var defaultConfig = require("../config/config.js");

var CMPList = require("../list/list.js");

var CMPLrc = require("../lrc/lrc.js");

var CMPMixer = require("../mixer/mixer.js");

class CMP extends ViewBase {

    constructor(container) {
        super();
        if (arguments.length) {
            this.setContainer(container);
        }
    }

    setConfig(config) {
        this.config = Util.merge({lrcforward:0.6,lrc_trans:'2'}, defaultConfig, config);
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

        this.createLrc();
        this.createAudio();

        this.createVideo();

        this.createMixer();

        this.createList();

    }

    createLrc(){
        this.$lrc = this.find(".cmp-lrc");
        this.lrc = new CMPLrc(this.$lrc);
        var self=this;
        this.$lrc.bind("click", function(e) {
            self.mixer.setMixerIndex(self.mixer.getMixerIndex()+1);
        });
    }
    createAudio() {
        this.$audio = this.find(".cmp-audio");
        this.audio = this.$audio.get(0);
        this.audio.autoplay = false;
        this.audio.loop = false;
        this.audio.preload = true;
        this.audio.controls = true;
        /***
            Anonymous 支持播放直接跨域MP3，但是301跨域资源 需要 Access-Control-Allow-Origin为*
        ***/
        this.audio.crossOrigin  = 'Anonymous'; 
        //https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement
        //https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
        var self = this;
        this.audio.ontimeupdate =function(){
            Util.currentItem.lrcLoaded && self.lrc.asyncLrc(self.audio.currentTime);
        };
        this.$audio.bind("timeupdate", function(e) {
            //console.log(e.timeStamp);
        }).bind("ended", function(e) {
            self.mixer.stop();
            self.cmpList.next();
        }).bind("error", function(e) {
            self.loadItemError();
        }).bind("progress", function(e) {

        }).bind("abort", function(e) {

        }).bind("play", function(e) {
            self.mixer.play();
        }).bind("playing", function(e) {

        }).bind("pause", function(e) {

        }).bind("loadedmetadata", function(e) {

        }).bind("seeking", function(e) {

        }).bind("volumechange", function(e) {

        });

    }

    createVideo() {
        this.$video = this.find(".cmp-video");
        this.video = this.$video.get(0);
        this.video.autoplay = false;
        this.video.loop = false;
        this.video.preload = true;
        this.video.controls = true; 
        var self=this;
        this.$video.bind("timeupdate", function(e) {
            //console.log(e.timeStamp);
        }).bind("ended", function(e) {
            self.cmpList.next();
        }).bind("play", function(e) {
            console.log('ended');
            self.mixer.stop();
        }).bind("error", function(e) {
            self.loadItemError();
        }).bind("abort", function(e) {
            console.log(e);
        });
        
    }

    createMixer() {
        this.$mixer = this.find(".cmp-mixer");
        this.mixer = new CMPMixer(this.$mixer);
        this.mixer.setAudio(this.audio);
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

    async loadItem(item) {

        //console.log(item);
        Util.currentItem = item;
        this.lrc.showLrc('');
        Util.currentItem.lrcLoaded=false;
        this.showTitle(item.label);
        try {
            if(item.type=='video' || item.type=='mp4' || item.type=='2' || item.mp4 ||item.src.indexOf('.mp4')>0){
                await this.audio.pause();
                this.$audio.hide();
                this.$video.show();
                this.video.src=item.mp4||item.src;
                this.video.play();
                
            }else if(item.type=='audio' ||item.type=='mp3' || item.type=='1' ||  item.src.indexOf('.mp3')>0){
                await this.video.pause();
                
                this.$video.hide();
                this.$audio.show();
                if(item.lrc){
                    //歌词翻译配置 0为不翻译 1为翻译 2为显示双语
                    var lrc_trans = item.hasOwnProperty('lrc_trans') ? item.lrc_trans: this.config.lrc_trans;
                    if ('2' !== lrc_trans) {
                        lrc_trans = lrc_trans == '0' || lrc_trans == 'false' ? false: true;
                    }
                    this.lrc.setForward(item.lrcforward || this.config.lrcforward);
                    this.lrc.setTrans(lrc_trans);
                    this.lrc.fetchLrc(item.lrc).then(res=>{ Util.currentItem.lrcLoaded = res });
                }
                this.audio.src = item.src;
                this.audio.play();
            } 
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