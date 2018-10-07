var EventBase = require("./event-base.js");
var $ = require("./query.js");
class ViewBase extends EventBase {

    constructor() {
        super();
        this.holder = null;
        this.container = null;
        this.containerAutoResize = true;

        this.width = 0;
        this.height = 0;
        this.visible = true;
    }

    //================================
    getContainer() {
        return this.container;
    }

    setContainer(container) {
        this.container = $(container);
        return this;
    }

    //================================
    //size api
    setSize() {
        if (!this.container) {
            return this;
        }
        var newSize = this.getNewSize.apply(this, arguments);
        var nw = newSize.width;
        var nh = newSize.height;
        if (this.width !== nw || this.height !== nh) {
            this.width = nw;
            this.height = nh;
            this.setSizeNow();
        }
        return this;
    }

    getNewSize() {
        var w = this.width;
        var h = this.height;
        if (arguments.length) {
            var nw = Math.round(arguments[0]);
            if (nw >= 0) {
                w = nw;
            }
            if (arguments.length > 1) {
                var nh = Math.round(arguments[1]);
                if (nh >= 0) {
                    h = nh;
                }
            }
        } else {
            w = this.container.width();
            h = this.container.height();
        }
        return {
            width: w,
            height: h
        };
    }

    setSizeNow() {
        if (!this.containerAutoResize) {
            this.container.width(this.width).height(this.height);
        }
        this.trigger("resize");
        return this;
    }

    //get and update current size base on container
    getSize(holder) {
        var elem = holder || this.container;
        var width = elem.width();
        var height = elem.height();
        var offset = elem.offset();
        if (!holder) {
            //update for owner
            this.width = width;
            this.height = height;
            this.offset = offset;
        }
        return {
            width: width,
            height: height,
            offset: offset
        };
    }

    //================================
    //visible api
    show() {
        if (this.container) {
            this.container.show();
        }
        this.visible = true;
        this.trigger("display", true);
        return this;
    }

    hide() {
        this.visible = false;
        if (this.container) {
            this.container.hide();
        }
        this.trigger("display", false);
        return this;
    }

    //================================
    //remove api
    beforeRemove() {
        //override
        return this;
    }

    remove() {
        this.beforeRemove();
        this.hide();
        this.unbind();
        return this;
    }

    destroy() {
        this.remove();
        if (this.container) {
            this.container.remove();
            this.container = null;
        }
    }

    //================================
    //common api
    //find child from current container
    find(context, container) {
        return $(container || this.container).find(context);
    }

    contains(container, target) {
        container = $(container).get(0);
        target = $(target).get(0);
        //(container, target);
        if (!container || !target) {
            return false;
        }
        return $.contains(container, target);
    }

    //class print
    toString() {
        return "[object ViewBase]";
    }
}

module.exports = ViewBase;