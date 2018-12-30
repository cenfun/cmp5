//var Util = require("../core/util.js");
var $ = require("../core/query.js");

var ViewBase = require("../core/view-base.js");

class CMPMixer extends ViewBase {

    constructor() {
        super();
    }

    draw(option) {

        this.option = option;
        this.container = $(option.container);

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

    createAnalyser() {
        //https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createAnalyser
        var analyser = this.audioContext.createAnalyser();
        console.log(analyser);

        //https://developer.mozilla.org/zh-CN/docs/Web/API/AudioContext/createMediaElementSource
        var source = this.audioContext.createMediaElementSource(this.option.audio);
        source.connect(analyser);
        analyser.connect(this.audioContext.destination);


        this.canvas = this.find("canvas").get(0);
        this.ctx = this.canvas.getContext('2d');

        this.resize();

        this.drawMixer(analyser);
    }

    drawMixer(analyser) {

        var cw = this.canvas.width;
        var ch = this.canvas.height;

        //analyser.fftSize = 2048;
        //analyser.smoothingTimeConstant = 0.95;

        //analyser.minDecibels = -100;
        //analyser.maxDecibels = -30;

        var array = new Float32Array(analyser.fftSize);
        analyser.getFloatTimeDomainData(array);


        var hh = ch * 0.5;
        var l = array.length;
        var offset = cw / l;

        //if (Math.random() > 0.99) {
        //console.log(analyser.fftSize, l);
        //console.log(Math.min.apply(null, array), Math.max.apply(null, array));
        //console.log(array);
        //}

        this.ctx.clearRect(0, 0, cw, ch);
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


        var self = this;
        requestAnimationFrame(function() {
            self.drawMixer(analyser);
        });

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