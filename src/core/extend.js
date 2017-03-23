define(function() {
    "use strict";
    /**
     * @build 2016.5.20
     * @author Kevin Zhu
     */
    var mergeProps = function(target, list) {
        for (var i = 0, l = list.length; i < l; i++) {
            var item = list[i];
            if (!item) {
                continue;
            }
            for (var k in item) {
                if (typeof(item[k]) !== "undefined") {
                    target[k] = item[k];
                }
            }
        }
    };

    var Extend = function() {

    };

    Extend.extend = function(protoProps, staticProps) {

        var ExtendParent = this;

        //============================================================
        //constructor
        var ExtendChild = function() {
            return ExtendParent.apply(this, arguments);
        };

        //if custom constructor
        if (protoProps && protoProps.hasOwnProperty("constructor") && typeof(protoProps.constructor) === 'function') {
            ExtendChild = protoProps.constructor;
        }

        //add static properties to the constructor
        mergeProps(ExtendChild, [ExtendParent, staticProps]);

        //============================================================
        //prototype handler
        mergeProps(ExtendChild.prototype, [new ExtendParent(), {
            constructor: ExtendChild
        }, protoProps]);

        //============================================================
        //keep as super
        ExtendChild.__super__ = ExtendParent.prototype;

        return ExtendChild;

    };

    return Extend;

});
