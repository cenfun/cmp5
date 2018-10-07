var Util = require("../core/util.js");
var $ = require("../core/query.js");

var ViewBase = require("../core/view-base.js");

class CMPMixer extends ViewBase {

    constructor() {
        super();
    }

    draw(option) {

        this.option = option;
        this.container = $(option.container);

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
        var analyser = this.audioContext.createAnalyser();

        console.log(analyser);

        var source = this.audioContext.createMediaElementSource(this.option.audio);

        source.connect(analyser);

        analyser.connect(this.audioContext.destination);

        // we could configure the analyser: e.g. analyser.fftSize (for further infos read the spec)
        // analyser.fftSize = 64;
        // frequencyBinCount tells you how many values you'll receive from the analyser

        //var frequencyData = new Uint8Array(analyser.frequencyBinCount);

        this.canvas = this.find("canvas").get(0);

        this.ctx = this.canvas.getContext('2d');

        this.gradient = this.ctx.createLinearGradient(0, 0, 0, 300);
        this.gradient.addColorStop(1, '#0f0');
        this.gradient.addColorStop(0.5, '#ff0');
        this.gradient.addColorStop(0, '#f00');

        this.drawMixer(analyser);
    }

    drawMixer(analyser) {

        var cwidth = this.canvas.width;
        var cheight = this.canvas.height - 2;

        var meterWidth = 10;
        var capHeight = 2;
        var capStyle = '#fff';
        var meterNum = 800 / (10 + 2);
        var capYPositionArray = [];

        var array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);

        //console.log(1);


        var step = Math.round(array.length / meterNum);
        this.ctx.clearRect(0, 0, cwidth, cheight);

        for (var i = 0; i < meterNum; i++) {
            var value = array[i * step];
            if (capYPositionArray.length < Math.round(meterNum)) {
                capYPositionArray.push(value);
            }
            this.ctx.fillStyle = capStyle;
            //draw the cap, with transition effect
            if (value < capYPositionArray[i]) {
                this.ctx.fillRect(i * 12, cheight - (--capYPositionArray[i]), meterWidth, capHeight);
            } else {
                this.ctx.fillRect(i * 12, cheight - value, meterWidth, capHeight);
                capYPositionArray[i] = value;
            }
            this.ctx.fillStyle = this.gradient;

            this.ctx.fillRect(i * 12, cheight - value + capHeight, meterWidth, cheight);
        }

        var self = this;
        requestAnimationFrame(function() {
            self.drawMixer(analyser);
        });


    }



    toString() {
        return "[object CMPMixer]";
    }

}

module.exports = CMPMixer;