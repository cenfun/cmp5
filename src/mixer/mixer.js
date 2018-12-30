var Util = require("../core/util.js");
var $ = require("../core/query.js");

var ViewBase = require("../core/view-base.js");

class CMPMixer extends ViewBase {

    constructor(container) {
        super();
        this.container = $(container);
    }

    draw(option) {

        this.option = option;

        //https://developer.mozilla.org/zh-CN/docs/Web/API/AudioContext
        this.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
        try {
            this.audioContext = new this.AudioContext();
        } catch (e) {
            console.log("ERROR: Can NOT create AudioContext");
            return;
        }

        this.createAnalyser();

    }

    getMixerIndex() {
        return this.mixerIndex || Util.getCookie("mixerIndex") || 0;
    }

    setMixerIndex(index) {
        this.mixerIndex = index;
        Util.setCookie("mixerIndex", index);
    }

    createAnalyser() {
        //https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createAnalyser
        this.analyser = this.audioContext.createAnalyser();
        console.log(this.analyser);

        //https://developer.mozilla.org/zh-CN/docs/Web/API/AudioContext/createMediaElementSource
        var source = this.audioContext.createMediaElementSource(this.option.audio);
        source.connect(this.analyser);
        this.analyser.connect(this.audioContext.destination);

        //var oscillator = this.audioContext.createOscillator();
        //oscillator.channelCountMode = 'explicit';

        //this.analyser.minDecibels = -90;
        //this.analyser.maxDecibels = -10;


        this.mixerIndex = this.getMixerIndex();
        this.mixerList = [this.drawLine, this.drawOceanWaves];

        this.canvas = this.find("canvas").get(0);
        this.ctx = this.canvas.getContext('2d');

        var self = this;
        this.container.bind("click", function(e) {
            self.setMixerIndex(self.mixerIndex + 1);
        });

        this.resize();

        this.drawMixer();
    }

    drawMixer() {

        var drawer = this.mixerList[this.mixerIndex];
        if (!drawer) {
            drawer = this.mixerList[0];
            this.setMixerIndex(0);
        }
        drawer.call(this);

        var self = this;
        requestAnimationFrame(function() {
            self.drawMixer();
        });

    }


    drawLine() {
        //analyser.fftSize = 2048;

        var array = new Float32Array(this.analyser.fftSize);
        this.analyser.getFloatTimeDomainData(array);

        var hh = this.height * 0.5;
        var l = array.length;
        var offset = this.width / l;

        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.strokeStyle = '#00ff00';
        this.ctx.lineWidth = 2;
        this.ctx.lineJoin = "round";
        this.ctx.beginPath();
        this.ctx.moveTo(0, hh);

        for (var i = 0; i < l; i++) {
            var item = array[i];
            this.ctx.lineTo(i * offset, hh + hh * 0.6 * item);
        }

        this.ctx.stroke();

    }

    drawOceanWaves() {

        //this.analyser.fftSize = 1024;
        this.analyser.smoothingTimeConstant = 0.9;

        var array = new Uint8Array(this.analyser.frequencyBinCount);
        this.analyser.getByteFrequencyData(array);

        // if (Math.random() > 0.95) {
        //     console.log(array);
        //     console.log(this.analyser.minDecibels, this.analyser.maxDecibels);
        // }

        var l = array.length;
        var offset = this.width / l;

        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.fillStyle = '#00ff00';
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.height);

        for (var i = 0; i < l; i++) {
            var item = array[i];
            var h = item / 255 * this.height * 0.9;
            var x = i * offset;
            var y = this.height - h;
            this.ctx.lineTo(x, y);
        }
        this.ctx.closePath();
        this.ctx.fill();
    }

    resize() {
        this.width = this.container.width();
        this.height = this.container.height();

        this.canvas.setAttribute("width", this.width + "px");
        this.canvas.setAttribute("height", this.height + "px");
    }

    toString() {
        return "[object CMPMixer]";
    }

}

module.exports = CMPMixer;