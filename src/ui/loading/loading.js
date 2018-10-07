var $ = require("../../core/query.js");
var ViewBase = require("../../core/view-base.js");

require("./loading.scss");
var template = require("./loading.html");

class Loading extends ViewBase {

    constructor() {
        super();
        this.visible = false;
    }

    create() {

        this.elem = $(template).appendTo(this.container);

        this.mask = this.elem.find(".loading_mask");
        this.main = this.elem.find(".loading_main");
        this.text = this.elem.find(".loading_text");
    }

    setText(text) {
        text = text || "";
        if (this.text) {
            this.text.html(text);
        }
        return this;
    }

    show(text) {

        if (!this.container) {
            return this;
        }

        if (!this.elem) {
            this.create();
        }

        this.elem.show();
        this.setText(text);

        return this;
    }

    hide() {
        this.elem.hide();
        this.setText("");
        return this;
    }


    toString() {
        return "[object Loading]";
    }
}

module.exports = Loading;