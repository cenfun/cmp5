define(function() {
    "use strict";


    var Util = require("../core/util.js");

    var ViewBase = require("../core/view.base.js");

    var CMPList = ViewBase.extend({

        constructor: function() {

        },

        draw: function(option) {
            this.option = option;
            this.container = $(option.container).empty();
            this.list = option.list;
            this.index = -1;

            var self = this;
            this.list.forEach(function(item, index) {
                self.drawItem(item, index);
            });

            this.find(".cmp_list_item").bind("click", function(e) {
                var $item = $(this);
                if ($item.hasClass("cmp_list_item")) {
                    self.itemClickHandler($item);
                }
            });

        },

        itemClickHandler: function($item) {
            var index = $item.attr("data");
            this.indexHandler(index);
        },

        next: function() {
            var index = Util.tonum(this.index) + 1;
            if (index > this.list.length - 1) {
                index = 0;
            }
            index = Util.clamp(index, 0, this.list.length - 1);
            this.indexHandler(index);
        },

        indexHandler: function(index) {
            var item = this.list[index];
            if (!item) {
                return;
            }
            this.find(".cmp_list_item").removeClass("selected");
            this.find(".cmp_list_item[data='" + index + "']").addClass("selected");
            this.index = index;
            this.trigger("change", item);
        },

        drawItem: function(item, index) {
            var $item = $("<div/>").attr("data", index).addClass("cmp_list_item").appendTo(this.container);
            $item.html(item.label);
        },


        toString: function() {
            return "[object CMPList]";
        }

    });

    return CMPList;

});