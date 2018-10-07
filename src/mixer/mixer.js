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

        //var source = this.audioContext.createMediaElementSource(this.option.audio);

        //source.connect(analyser);

        //analyser.connect(this.audioContext.destination);

        // we could configure the analyser: e.g. analyser.fftSize (for further infos read the spec)
        // analyser.fftSize = 64;
        // frequencyBinCount tells you how many values you'll receive from the analyser

        //var frequencyData = new Uint8Array(analyser.frequencyBinCount);

        this.canvas = this.find("canvas").get(0);

        var cwidth = this.canvas.width;
        var cheight = this.canvas.height - 2;
        var meterWidth = 10;
        var gap = 2;
        var capHeight = 2;
        var capStyle = '#fff';
        var meterNum = 800 / (10 + 2);
        var capYPositionArray = [];

        var ctx = this.canvas.getContext('2d');
        var gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(1, '#0f0');
        gradient.addColorStop(0.5, '#ff0');
        gradient.addColorStop(0, '#f00');

        this.drawMixer();
    }

    drawMixer() {

    }



    toString() {
        return "[object CMPMixer]";
    }

}

module.exports = CMPMixer;