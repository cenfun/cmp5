define(function() {
    "use strict";


    var Util = require("./core/util.js");

    var ViewBase = require("./core/view-base.js");

    var CMPList = ViewBase.extend({

        constructor: function() {

        },

        draw: function(option) {
            this.option = option;
            this.container = $(option.container).empty();
            this.list = option.list;

            var self = this;
            this.list.forEach(function(item) {
                self.drawItem(item);
            });

            this.find(".cmp_list_item").bind("click", function(e) {
                var $item = $(this);
                if ($item.hasClass("cmp_list_item")) {
                    self.itemClickHandler($item);
                }
            });

        },

        itemClickHandler: function($item) {
            var item = $item.data("data");
            if (!item) {
                return;
            }
            //console.log(item);
            this.trigger("change", item);
        },

        drawItem: function(item) {
            var $item = $("<div/>").data("data", item).addClass("cmp_list_item").appendTo(this.container);
            $item.html(item.label);
        },


        toString: function() {
            return "[object CMPList]";
        }

    });

    return CMPList;

});