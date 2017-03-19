define(function() {
    'use strict';

    var Util = {

        //=================================================================================
        //strings
        //to string type
        tostr: function(str) {
            if (typeof(str) === "function") {
                return Util.tostr(str.call());
            }
            return "" + str;
        },
        //zero fixed
        zero: function(s, l) {
            s = Util.tostr(s);
            l = l || 2;
            if (s.length < l) {
                var n = l - s.length;
                var sz = Math.pow(10, n).toString().substr(1) + s;
                return sz;
            }
            return s;
        },
        //get a token string
        token: function(len) {
            var str = Math.random().toString().substr(2);
            if (len) {
                str = str.substr(0, Util.tonum(len));
            }
            return str;
        },

        //=================================================================================
        //number
        //if is valid number
        isnum: function(num) {
            if (typeof(num) !== "number" || isNaN(num)) {
                return false;
            }
            var isInvalid = function(n) {
                if (n === Number.MAX_VALUE || n === Number.MIN_VALUE || n === Number.NEGATIVE_INFINITY || n === Number.POSITIVE_INFINITY) {
                    return true;
                }
                return false;
            };
            if (isInvalid(num)) {
                return false;
            }
            return true;
        },
        // format to a valid number
        tonum: function(num, toInt) {
            if (typeof(num) !== "number") {
                num = parseFloat(num);
            }
            if (isNaN(num)) {
                num = 0;
            }
            if (toInt) {
                num = Math.round(num);
            }
            return num;
        },
        numfix: function(num, fix) {
            var n = Util.tonum;
            var f = Util.isnum(fix) ? fix : 2;
            return n(num).toFixed(n(f, true));
        },

        clamp: function(num, min, max) {
            return Math.max(Math.min(num, max), min);
        },
        per: function(num) {
            num = Util.tonum(num);
            num = Util.clamp(num, 0, 1);
            return num;
        },


        htmlEncode: function(html) {
            var temp = document.createElement("div");
            if (temp.textContent !== undefined) {
                temp.textContent = html;
            } else {
                temp.innerText = html;
            }
            var output = temp.innerHTML;
            return output;
        },

        //string replace {name}
        replace: function(str, obj) {
            str = Util.tostr(str);
            if (!obj) {
                return str;
            }

            str = str.replace(/\{([^\}]+)\}/g, function(match, key) {

                if (!obj.hasOwnProperty(key)) {
                    return match;
                }

                var val = obj[key];

                if (typeof(val) === "function") {
                    val = val(obj, key);
                }

                if (typeof(val) === "undefined") {
                    val = "";
                }

                return val;

            });
            return str;
        },

        //whether data is array with length
        islist: function(data) {
            if (data && data instanceof Array && data.length > 0) {
                return true;
            }
            return false;
        },
        //whether item in list
        inlist: function(item, list) {
            if (!Util.islist(list)) {
                return false;
            }

            for (var i = 0, l = list.length; i < l; i++) {
                if (list[i] === item) {
                    return true;
                }
            }

            return false;
        },

        //getValue({a:{b:1}}, "a.b", 0)
        getValue: function(data, path, defaultValue) {
            if (!path) {
                return defaultValue;
            }
            var current = data;
            var list = path.split(".");
            var lastKey = list.pop();
            while (current && list.length) {
                var item = list.shift();
                current = current[item];
            }
            if (current && current.hasOwnProperty(lastKey)) {
                var value = current[lastKey];
                if (typeof(value) !== "undefined") {
                    return value;
                }
            }
            return defaultValue;
        }

    };

    return Util;

});