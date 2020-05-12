var Util = require("../core/util.js");
var $ = require("../core/query.js");

var ViewBase = require("../core/view-base.js");

class CMPMixer extends ViewBase {

    constructor(container) {
        super();
        this.container = $(container);
        var self = this;
        this.container.bind("click", function(e) {
            self.setMixerIndex(self.mixerIndex + 1);
        });

        this.canvas = this.find("canvas").get(0);
        this.ctx = this.canvas.getContext('2d');

        this.mixerIndex = this.getMixerIndex();
        this.mixerList = [this.drawSpectrum , this.drawLine, this.drawOceanWaves];

        this.resize();

    }

    setAudio(audio) {
        this.audio = audio;
        this.initAudioContext();
    }

    getMixerIndex() {
        return this.mixerIndex || Util.getCookie("mixerIndex") || 0;
    }

    setMixerIndex(index) {
        this.mixerIndex = index;
        Util.setCookie("mixerIndex", index);
    }

    //========================================================================================

    async stop() {
        //console.log("stop");
        cancelAnimationFrame(this.time_frame);

        this.freqLength = 0;

    }


    async play() {
        //console.log("play");

        await this.stop();

        //https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode

        //this.analyser.minDecibels = -90;
        //this.analyser.maxDecibels = -10;

        //console.log(this.analyser);

        this.drawMixer();

    }

    initAudioContext() {
        //https://developer.mozilla.org/zh-CN/docs/Web/API/AudioContext
        this.audioContext = new AudioContext();

        //https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createAnalyser
        this.analyser = this.audioContext.createAnalyser();
        //this.analyser.channelCountMode = "explicit";
        //this.analyser.channelInterpretation = 'discrete';
        //this.analyser.fftSize = 2048;

        //https://developer.mozilla.org/zh-CN/docs/Web/API/AudioContext/createMediaElementSource
        this.mediaElementSource = this.audioContext.createMediaElementSource(this.audio);
        this.mediaElementSource.connect(this.analyser);

        this.analyser.connect(this.audioContext.destination);

    }

    //========================================================================================

    drawMixer() {

        var drawer = this.mixerList[this.mixerIndex];
        if (!drawer) {
            drawer = this.mixerList[0];
            this.setMixerIndex(0);
        }
        drawer.call(this);

        var self = this;
        this.time_frame = requestAnimationFrame(function() {
            self.drawMixer();
        });

    }
    drawSpectrum() {
        var meterWidth = 5, //频谱条宽度
        gap = 6, //频谱条间距
        capHeight = 2,
        capYPositionArray = []; //将上一画面各帽头的位置保存到这个数组
        var gradient = this.ctx.createLinearGradient(0, 0, 0, 350);
        gradient.addColorStop(1, '#0f0');
        gradient.addColorStop(0.5, '#ff0');
        gradient.addColorStop(0, '#f00');
        var array = new Uint8Array(this.analyser.frequencyBinCount);
        var l=this.getFreqLength(array);
        this.analyser.getByteFrequencyData(array);
        var step = Math.round(array.length / l); //计算采样步长
        this.ctx.clearRect(0, 0, this.width, this.height);
        for (var i = 0; i < l; i++) {
                var value = array[i * step]; //获取当前能量值
                if (capYPositionArray.length < l) {
                    capYPositionArray.push(value); //初始化保存帽头位置的数组，将第一个画面的数据压入其中
                };
                this.ctx.fillStyle = '#fff';
                //开始绘制帽头
                if (value < capYPositionArray[i]) { //如果当前值小于之前值
                    this.ctx.fillRect(i * gap, this.height - (--capYPositionArray[i]), meterWidth, capHeight); //则使用前一次保存的值来绘制帽头
                } else {
                    this.ctx.fillRect(i * gap, this.height - value, meterWidth, capHeight); //否则使用当前值直接绘制
                    capYPositionArray[i] = value;
                };
                //开始绘制频谱条
                this.ctx.fillStyle = gradient;
                this.ctx.fillRect(i * gap, this.height - value + capHeight, meterWidth, this.height);
        }
    }

    drawLine() {

        //this.analyser.fftSize = 256;

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

    getFreqLength(array) {
        var max = array.length;
        if (!this.freqLength) {
            this.freqLength = Math.ceil(max * 0.5);
        }
        var min = this.freqLength;
        for (var i = max - 1; i >= min; i--) {
            var v = array[i];
            if (v !== 0) {
                this.freqLength = i;
                break;
            }
        }
        return this.freqLength;
    }

    drawOceanWaves() {

        this.analyser.smoothingTimeConstant = 0.92;

        //this.analyser.minDecibels = -90;
        //this.analyser.maxDecibels = 0;

        var array = new Uint8Array(this.analyser.frequencyBinCount);
        this.analyser.getByteFrequencyData(array);


        var l = this.getFreqLength(array);

        // if (Math.random() > 0.95) {
        //     console.log(l);
        // console.log(array);
        // console.log(this.analyser.minDecibels, this.analyser.maxDecibels);
        // console.log(Math.min.apply(null, array), Math.max.apply(null, array));
        // }


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
        this.ctx.lineTo(this.width, this.height);
        this.ctx.closePath();
        this.ctx.fill();
    }

    //========================================================================================

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