define(function() {
    "use strict";
    /**
     * @author Cenfun
     */
    var T = require("./t.js");

    /**
     * @constructor
     * @returns {OptionBase}
     */
    var OptionBase = function() {

    };
    OptionBase.prototype = {
        option: null,
        defaultOption: function() {
            return {};
        },
        setOption: function() {
            this.option = this.getOption.apply(this, arguments);
            return this;
        },
        getOption: function() {
            var option = this.option;
            //default option from class self
            var def_option = this.defaultOption();
            //merge option
            if (arguments.length && arguments[0]) {
                //new option form custom
                var new_option = arguments[0];
                //if append the option to current option
                if (arguments[1]) {
                    def_option = this.option;
                }
                option = T.merge(def_option, new_option);
            }
            return option || def_option;
        }
    };

    return OptionBase;

});
