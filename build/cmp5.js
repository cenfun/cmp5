(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
    "use strict";
    /**
     * @build 2011.11.30
     * @author Kevin Zhu
     */
    var $ = window.$;
    var Extend = __webpack_require__(2);
    //====================================================================================================
    /**
     * @constructor
     * @returns {EventBase}
     */
    var EventBase = Extend.extend({
        dispatcher: null,
        getDispatcher: function() {
            if (!this.dispatcher) {
                this.dispatcher = $(this);
            }
            return this.dispatcher;
        },
        bind: function() {
            var dispatcher = this.getDispatcher();
            dispatcher.bind.apply(dispatcher, arguments);
            return this;
        },
        one: function() {
            var dispatcher = this.getDispatcher();
            dispatcher.one.apply(dispatcher, arguments);
            return this;
        },
        unbind: function() {
            var dispatcher = this.getDispatcher();
            dispatcher.unbind.apply(dispatcher, arguments);
            return this;
        },
        trigger: function() {
            var dispatcher = this.getDispatcher();
            //use triggerHandler replace trigger to stop default events
            return dispatcher.triggerHandler.apply(dispatcher, arguments);
        }
    });

    return EventBase;

}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
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

}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
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

}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
    "use strict";

    var Util = __webpack_require__(1);

    var EventBase = __webpack_require__(0);

    var CMP5 = EventBase.extend({


    });

    return CMP5;

}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })
/******/ ]);
});
//# sourceMappingURL=cmp5.js.map