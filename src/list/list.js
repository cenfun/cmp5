var Util = require("../core/util.js");
var $ = require("../core/query.js");

var ViewBase = require("../core/view-base.js");

class CMPList extends ViewBase {

    constructor() {
        super();
    }

    draw(option) {
        this.option = option;
        var self = this;

        this.container = $(option.container).empty();
        this.container.delegate(".cmp_list_item", "click", function(e) {
            var $item = $(e.target);
            self.itemClickHandler($item);
        });

        this.list = option.list;
        this.index = -1;

        this.list.forEach(function(item, index) {
            self.drawItem(item, index);
        });

        this.trigger("ready");

    }

    itemClickHandler($item) {
        var index = $item.attr("data");
        //console.log(index);
        this.indexHandler(index);
    }

    next() {
        var index = Util.tonum(this.index) + 1;
        if (index > this.list.length - 1) {
            index = 0;
        }
        index = Util.clamp(index, 0, this.list.length - 1);
        this.indexHandler(index);
    }

    indexHandler(index) {
        var item = this.list[index];
        if (!item) {
            return;
        }
        this.find(".cmp_list_item").removeClass("selected");
        this.find(".cmp_list_item[data='" + index + "']").addClass("selected");
        this.index = index;
        this.trigger("change", item);
    }

    drawItem(item, index) {
        var $item = $("<div/>").attr("data", index).addClass("cmp_list_item").appendTo(this.container);
        $item.html(item.label);
    }

    toString() {
        return "[object CMPList]";
    }

}

module.exports = CMPList;