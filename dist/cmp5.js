(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("cmp5", [], factory);
	else if(typeof exports === 'object')
		exports["cmp5"] = factory();
	else
		root["cmp5"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/skin/base.scss":
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/skin/base.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cmp * {\n  box-sizing: border-box; }\n\n/* clearfix */\n.cmp .floatlt {\n  float: left; }\n\n.cmp .floatrt {\n  float: right; }\n\n.cmp .clearfix:after {\n  content: ' ';\n  clear: both;\n  display: block;\n  font-size: 0;\n  line-height: 0;\n  width: 0;\n  height: 0;\n  visibility: hidden; }\n\n.cmp .clearfix {\n  display: block; }\n\n/* global class */\n.cmp .break {\n  overflow: hidden;\n  word-wrap: break-word;\n  word-break: break-all; }\n\n.cmp .ellipsis {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap; }\n\n/* position layout */\n.cmp .poslt {\n  position: absolute;\n  left: 0; }\n\n.cmp .posrt {\n  position: absolute;\n  right: 0; }\n\n.cmp .postp {\n  position: absolute;\n  top: 0; }\n\n.cmp .posbt {\n  position: absolute;\n  bottom: 0; }\n\n.cmp .poscc {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/skin/layout.scss":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/skin/layout.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n==================================================\r\ncmp\r\n*/\n.cmp {\n  position: relative; }\n\n.cmp_header {\n  height: 50px;\n  border-bottom: 1px solid #999; }\n\n.cmp_title {\n  padding: 0px 10px;\n  line-height: 50px; }\n\n.cmp_footer {\n  position: fixed;\n  border-top: 1px solid #999;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  height: 50px; }\n\n.cmp_bodyer {\n  position: absolute;\n  top: 50px;\n  left: 0px;\n  right: 0px;\n  bottom: 50px; }\n\n/*\r\n==================================================\r\nview\r\n*/\n.cmp_view_list {\n  position: relative;\n  width: 100%;\n  height: 100%; }\n\n.cmp_view_item {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  display: none; }\n\n.cmp_view_item.selected {\n  display: block; }\n\n/*\r\n==================================================\r\ncmp_list\r\n*/\n.cmp_list {\n  position: relative; }\n\n.cmp_list_item {\n  border-bottom: 1px solid #ccc;\n  padding: 5px 5px;\n  cursor: pointer; }\n\n.cmp_list_item:hover {\n  background: #f5f5f5; }\n\n.cmp_list_item.selected {\n  background: #aaaaaa; }\n\n/*\r\n==================================================\r\ncmp_control\r\n*/\n.cmp_control {\n  position: fixed;\n  bottom: 0px; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/ui/loading/loading.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/ui/loading/loading.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loading {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  z-index: 99999; }\n\n.loading_mask {\n  background: #000000;\n  opacity: 0.3;\n  width: 100%;\n  height: 100%; }\n\n.loading_main {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background: url(" + escape(__webpack_require__(/*! ./loading.gif */ "./src/ui/loading/loading.gif")) + ") no-repeat center center;\n  width: 100%;\n  height: 100%; }\n\n.loading_text {\n  position: absolute;\n  top: 50%;\n  left: 0px;\n  width: 100%;\n  margin-top: 10px;\n  text-align: center; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/cmp/cmp.html":
/*!**************************!*\
  !*** ./src/cmp/cmp.html ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cmp_header clearfix\"> <div class=\"cmp_title\"></div> </div> <div class=\"cmp_bodyer clearfix\"> <div class=\"cmp_view_list\"> <div class=\"cmp_view_item selected\"> <div class=\"cmp_list\"></div> </div> <div class=\"cmp_view_item\"> <div class=\"cmp_media\"> <video class=\"cmp_video\" src=\"\"></video> </div> </div> <div class=\"cmp_view_item\"> <div class=\"cmp_lrc\"></div> </div> </div> </div> <div class=\"cmp_footer clearfix\"> <div class=\"cmp_control\"> <audio class=\"cmp_audio\"></audio> </div> </div>";

/***/ }),

/***/ "./src/cmp/cmp.js":
/*!************************!*\
  !*** ./src/cmp/cmp.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

__webpack_require__(/*! ../skin/base.scss */ "./src/skin/base.scss");

__webpack_require__(/*! ../skin/layout.scss */ "./src/skin/layout.scss");

var template = __webpack_require__(/*! ./cmp.html */ "./src/cmp/cmp.html");

var $ = __webpack_require__(/*! ../core/query.js */ "./src/core/query.js");

var Loading = __webpack_require__(/*! ../ui/loading/loading.js */ "./src/ui/loading/loading.js");

var Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

var ViewBase = __webpack_require__(/*! ../core/view-base.js */ "./src/core/view-base.js");

var defaultConfig = __webpack_require__(/*! ../config/config.js */ "./src/config/config.js");

var CMPList = __webpack_require__(/*! ../list/list.js */ "./src/list/list.js");

var CMP =
/*#__PURE__*/
function (_ViewBase) {
  _inherits(CMP, _ViewBase);

  function CMP(container) {
    var _this;

    _classCallCheck(this, CMP);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CMP).call(this));

    if (arguments.length) {
      _this.setContainer(container);
    }

    return _this;
  }

  _createClass(CMP, [{
    key: "setConfig",
    value: function setConfig(config) {
      this.config = Util.merge({}, defaultConfig, config);
      return this;
    }
  }, {
    key: "setList",
    value: function setList(list) {
      if (!Util.islist(list)) {
        return this;
      }

      this.list = list;
    }
  }, {
    key: "create",
    value: function create() {
      var self = this;
      this.uid = "cmp_" + Util.token(8);
      this.container.addClass("cmp " + this.uid).empty();
      $(template).appendTo(this.container);
      this.loading = new Loading();
      this.loading.setContainer(this.container);
      this.showTitle();
      this.$list = this.find(".cmp_list");
      this.cmpList = new CMPList();
      this.cmpList.bind("change", function (e, item) {
        self.loadItem(item);
      });
      this.cmpList.draw({
        container: this.$list,
        list: this.list
      });
      this.$audio = this.find(".cmp_audio");
      this.audio = this.$audio.get(0);
      this.audio.autoplay = false;
      this.audio.loop = false;
      this.audio.preload = true;
      this.audio.controls = true;
      this.$audio.bind("timeupdate", function (e) {//console.log(e.timeStamp);
      });
      this.$audio.bind("ended", function (e) {
        self.cmpList.next();
      });
      this.$audio.bind("error", function (e) {
        self.cmpList.next();
      });
      this.$video = this.find(".cmp_video");
    }
  }, {
    key: "loadItem",
    value: function loadItem(item) {
      //console.log(item);
      this.showTitle(item.label);

      try {
        this.audio.src = item.src;
      } catch (e) {}

      this.audio.play();
    }
  }, {
    key: "play",
    value: function play(index) {
      if (!this.player) {
        this.create();
      }
    }
  }, {
    key: "showTitle",
    value: function showTitle(title) {
      if (!title) {
        title = this.config.name;
      }

      this.find(".cmp_title").html(title);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "[object CMP]";
    }
  }]);

  return CMP;
}(ViewBase);

module.exports = CMP;

/***/ }),

/***/ "./src/config/config.js":
/*!******************************!*\
  !*** ./src/config/config.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  var defaultConfig = {
    name: "CMP5 - 『生活需要音乐』",
    link: "http://bbs.cenfun.com/",
    description: "CMP5 - 『生活需要音乐』 - http://bbs.cenfun.com/",
    logo: "{src:logo.png,xywh:[10R,10R,0,0]}",
    skin: "skins/skin_default.js",
    autoplay: "1",
    counter: "http://img.users.51.la/3389672.asp"
  };
  return defaultConfig;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/core/event-base.js":
/*!********************************!*\
  !*** ./src/core/event-base.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventUtil = __webpack_require__(/*! ./event-util.js */ "./src/core/event-util.js");

var EventBase =
/*#__PURE__*/
function () {
  function EventBase() {
    _classCallCheck(this, EventBase);

    this.maxListeners = 10;
  }

  _createClass(EventBase, [{
    key: "setMaxListeners",
    value: function setMaxListeners(n) {
      this.maxListeners = Number(n) || 10;
    }
  }, {
    key: "getMaxListeners",
    value: function getMaxListeners() {
      return this.maxListeners;
    }
  }, {
    key: "getEventListeners",
    value: function getEventListeners() {
      if (!this.eventListeners) {
        this.eventListeners = {};
      }

      return this.eventListeners;
    } //=======================================================

  }, {
    key: "bind",
    value: function bind(types, handler, option) {
      var eventList = EventUtil.getEventList(this, types, handler, option);

      if (!eventList.length) {
        return this;
      }

      var eventListeners = this.getEventListeners();
      EventUtil.addEvents(eventListeners, eventList, this.maxListeners);
      return this;
    }
  }, {
    key: "on",
    value: function on() {
      return this.bind.apply(this, arguments);
    } //=======================================================

  }, {
    key: "one",
    value: function one(types, handler) {
      this.bind(types, handler, {
        one: true
      });
      return this;
    }
  }, {
    key: "once",
    value: function once() {
      return this.one.apply(this, arguments);
    } //=======================================================

  }, {
    key: "delegate",
    value: function delegate(selector, types, handler) {
      this.bind(types, handler, {
        delegate: selector
      });
      return this;
    } //=======================================================

  }, {
    key: "unbind",
    value: function unbind(types, handler, option) {
      var eventListeners = this.getEventListeners();

      if (!arguments.length) {
        EventUtil.removeAllEvents(eventListeners);
        return this;
      }

      var eventList = EventUtil.getEventList(this, types, handler, option);

      if (!eventList.length) {
        return this;
      }

      EventUtil.removeEvents(eventListeners, eventList);
      return this;
    }
  }, {
    key: "off",
    value: function off() {
      return this.unbind.apply(this, arguments);
    } //=======================================================

  }, {
    key: "trigger",
    value: function trigger(type, data) {
      var eventListeners = this.getEventListeners();
      EventUtil.sendEvent(this, eventListeners, type, data);
      return this;
    }
  }, {
    key: "emit",
    value: function emit() {
      return this.trigger.apply(this, arguments);
    } //=======================================================

  }, {
    key: "toString",
    value: function toString() {
      return "[object EventBase]";
    }
  }]);

  return EventBase;
}();

module.exports = EventBase;

/***/ }),

/***/ "./src/core/event-util.js":
/*!********************************!*\
  !*** ./src/core/event-util.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Event = __webpack_require__(/*! ./event.js */ "./src/core/event.js");

var Util = __webpack_require__(/*! ./util.js */ "./src/core/util.js");

var EventUtil = {
  specials: {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  },
  removeElementEvent: function removeElementEvent(event) {
    if (!event) {
      return;
    }

    var target = event.target;

    if (!target.Query) {
      return;
    }

    target.each(function (node) {
      if (node && node.removeEventListener) {
        node.removeEventListener(event.proxyType || event.type, event.proxyHandler);
      }
    });
  },
  addElementEvent: function addElementEvent(event) {
    var target = event.target;

    if (!target.Query) {
      return;
    }

    target.each(function (node) {
      if (node && node.addEventListener) {
        node.addEventListener(event.proxyType || event.type, event.proxyHandler);
      }
    });
  },
  sendElementEvent: function sendElementEvent(target, type, data) {
    type = this.specials[type] || type;
    var canBubble = true;
    var cancelable = true;
    target.each(function (node) {
      if (node && node.dispatchEvent) {
        var event = document.createEvent("HTMLEvents");
        event.initEvent(type, canBubble, cancelable);

        if (data) {
          Object.keys(data).forEach(function (k) {
            if (typeof event[k] === "undefined") {
              event[k] = data[k];
            }
          });
        }

        node.dispatchEvent(event);
      }
    });
  },
  //=======================================================
  removeProxyEventByOne: function removeProxyEventByOne(event) {
    if (!event.one) {
      return;
    }

    var target = event.target;
    var eventListeners = target.getEventListeners();
    var eventListener = eventListeners[event.type];

    if (!eventListener) {
      return;
    }

    var newEvents = [];
    eventListener.events.forEach(function (item) {
      if (item !== event) {
        newEvents.push(item);
      } else {
        EventUtil.removeElementEvent(item);
      }
    });
    eventListener.events = newEvents;
  },
  sendProxyEvent: function sendProxyEvent(event, customEvent) {
    if (event.proxyTypeHandler) {
      var passed = event.proxyTypeHandler(customEvent);

      if (!passed) {
        return;
      }
    }

    event.handler.call(event.target, new Event(customEvent), customEvent.originalEvent);
    EventUtil.removeProxyEventByOne(event);
  },
  delegateHandler: function delegateHandler(event, customEvent) {
    var node = customEvent.originalEvent.target;
    var $delegates = event.target.find(event.delegate);
    var container = $delegates.contains(node);

    if (!container) {
      return;
    }

    customEvent.currentTarget = container;
    customEvent.delegateTarget = event.target;
    EventUtil.sendProxyEvent(event, customEvent);
  },
  setSpecialEvent: function setSpecialEvent(event) {
    var special = this.specials[event.type];

    if (!special) {
      return;
    }

    event.proxyType = special; //for hover

    event.proxyTypeHandler = function (e) {
      var target = e.currentTarget;
      var related = e.relatedTarget; //No relatedTarget if the mouse left/entered the browser window
      //or related is outside the target 

      if (!related || related !== target && !Util.contains(target, related)) {
        //console.log("hover", special);
        return true;
      }

      return false;
    };
  },
  getCustomEvent: function getCustomEvent(e) {
    var customEvent = {
      originalEvent: e,
      data: e
    };
    var list = ["type", "target", "currentTarget", "relatedTarget", "keyCode", "shiftKey", "ctrlKey", "altKey", "metaKey", "detail", "which", "pageX", "pageY"];
    list.forEach(function (k) {
      customEvent[k] = e[k];
    });
    return customEvent;
  },
  getEventItem: function getEventItem(target, context, handler, option) {
    context += "";

    if (!context) {
      return null;
    }

    option = option || {};
    var arr = context.split(".");
    var type = arr.shift();
    var namespace = arr.join(".");
    var event = {
      type: type,
      target: target,
      context: context,
      namespace: namespace,
      handler: handler,
      one: option.one,
      prepend: option.prepend,
      delegate: option.delegate,
      defaultEvent: option.defaultEvent,
      proxyHandler: function proxyHandler(e) {
        var customEvent = EventUtil.getCustomEvent(e);

        if (event.delegate && event.target.Query) {
          EventUtil.delegateHandler(event, customEvent);
          return;
        }

        EventUtil.sendProxyEvent(event, customEvent);
      }
    };
    EventUtil.setSpecialEvent(event);
    return event;
  },
  getEventListByString: function getEventListByString(target, types, handler, option) {
    var list = [];
    var arr = types.split(" ");
    arr.forEach(function (type) {
      var eventItem = EventUtil.getEventItem(target, type, handler, option);

      if (eventItem) {
        list.push(eventItem);
      }
    });
    return list;
  },
  getEventListByObject: function getEventListByObject(target, types, option) {
    var list = [];
    var keys = Object.keys(types);
    keys.forEach(function (type) {
      var eventItem = EventUtil.getEventItem(target, type, types[type], option);

      if (eventItem) {
        list.push(eventItem);
      }
    });
    return list;
  },
  getEventList: function getEventList(target, types, handler, option) {
    if (!types) {
      return [];
    }

    if (typeof types === "string") {
      return EventUtil.getEventListByString(target, types, handler, option);
    }

    if (_typeof(types) === "object") {
      return EventUtil.getEventListByObject(target, types, handler);
    }

    return [];
  },
  //=======================================================
  addEvent: function addEvent(eventListener, event, maxListeners) {
    if (event.defaultEvent) {
      eventListener.defaultEvent = event;
      EventUtil.addElementEvent(event);
      return;
    }

    if (eventListener.events.length >= maxListeners) {
      var msg = "Possible Event memory leak detected. ";
      msg += "More than " + maxListeners + " (max limit) listeners added. ";
      msg += "Use setMaxListeners(n) to increase limit.";
      console.warn(msg);
      return;
    }

    if (event.prepend) {
      eventListener.events.unshift(event);
    } else {
      eventListener.events.push(event);
    }

    EventUtil.addElementEvent(event);
  },
  addEvents: function addEvents(eventListeners, eventList, maxListeners) {
    eventList.forEach(function (event) {
      var type = event.type;

      if (typeof eventListeners[type] === "undefined") {
        eventListeners[type] = {
          events: [],
          defaultEvent: null
        };
      }

      var handler = event.handler;

      if (typeof handler !== "function") {
        return;
      }

      var eventListener = eventListeners[type];
      EventUtil.addEvent(eventListener, event, maxListeners);
    });
  },
  //=======================================================
  removeEventByDefault: function removeEventByDefault(eventListeners, type) {
    var eventListener = eventListeners[type];

    if (!eventListener) {
      return;
    }

    if (eventListener.defaultEvent) {
      EventUtil.removeElementEvent(eventListener.defaultEvent);
      eventListener.defaultEvent = null;
    }
  },
  removeEventByNamespace: function removeEventByNamespace(eventListeners, namespace) {
    var types = Object.keys(eventListeners);
    types.forEach(function (type) {
      var eventListener = eventListeners[type];
      var newEvents = [];
      eventListener.events.forEach(function (item) {
        if (item && item.namespace !== namespace) {
          newEvents.push(item);
        } else {
          EventUtil.removeElementEvent(item);
        }
      });
      eventListener.events = newEvents;
    });
  },
  removeEventByHandler: function removeEventByHandler(eventListeners, type, handler) {
    var eventListener = eventListeners[type];

    if (!eventListener) {
      return;
    }

    var newEvents = [];
    eventListener.events.forEach(function (item) {
      if (item && item.handler !== handler) {
        newEvents.push(item);
      } else {
        EventUtil.removeElementEvent(item);
      }
    });
    eventListener.events = newEvents;
  },
  removeEventByType: function removeEventByType(eventListeners, type) {
    var eventListener = eventListeners[type];

    if (!eventListener) {
      return;
    } //remove event list by whole type


    eventListener.events.forEach(function (item) {
      EventUtil.removeElementEvent(item);
    });
    eventListener.events = []; //if no default should be remove all

    if (!eventListener.defaultEvent) {
      delete eventListeners[type];
    }
  },
  removeEventByOne: function removeEventByOne(eventListener) {
    var newEvents = [];
    eventListener.events.forEach(function (item) {
      if (item && !item.one) {
        newEvents.push(item);
      } else {
        EventUtil.removeElementEvent(item);
      }
    });
    eventListener.events = newEvents;
  },
  removeEvent: function removeEvent(eventListeners, event) {
    var type = event.type;

    if (event.defaultEvent) {
      EventUtil.removeEventByDefault(eventListeners, type);
      return;
    }

    var namespace = event.namespace;

    if (!type && namespace) {
      EventUtil.removeEventByNamespace(eventListeners, namespace);
      return;
    }

    var handler = event.handler;

    if (typeof handler === "function") {
      EventUtil.removeEventByHandler(eventListeners, type, handler);
      return;
    }

    EventUtil.removeEventByType(eventListeners, type);
  },
  removeEvents: function removeEvents(eventListeners, eventList) {
    eventList.forEach(function (event) {
      EventUtil.removeEvent(eventListeners, event);
    });
  },
  removeAllEvents: function removeAllEvents(eventListeners) {
    var types = Object.keys(eventListeners);
    types.forEach(function (type) {
      EventUtil.removeEventByType(eventListeners, type);
    });
  },
  //=======================================================
  sendEventList: function sendEventList(target, eventListener, event, data) {
    //call each handler if not stopped
    var events = eventListener.events;

    for (var i = 0; i < events.length; i++) {
      var item = events[i];
      event.handleObj = item;
      event.namespace = item.namespace;
      item.handler.call(target, event, data);

      if (event.isPropagationStopped) {
        break;
      }
    }

    EventUtil.removeEventByOne(eventListener);
  },
  sendEventDefault: function sendEventDefault(target, eventListener, event, data) {
    var defaultEvent = eventListener.defaultEvent;

    if (!defaultEvent || event.isDefaultPrevented) {
      return;
    }

    defaultEvent.handler.call(target, event, data);
  },
  sendEvent: function sendEvent(target, eventListeners, type, data) {
    if (!type) {
      return;
    }

    if (_typeof(type) === "object") {
      data = type;
      type = data.type;
    } //element event


    if (target.Query) {
      EventUtil.sendElementEvent(target, type, data);
      return;
    } //custom event


    var eventListener = eventListeners[type];

    if (!eventListener) {
      return;
    }

    var event = new Event({
      type: type,
      target: target,
      currentTarget: target,
      data: data
    });
    EventUtil.sendEventList(target, eventListener, event, data);
    EventUtil.sendEventDefault(target, eventListener, event, data);
  }
};
module.exports = EventUtil;

/***/ }),

/***/ "./src/core/event.js":
/*!***************************!*\
  !*** ./src/core/event.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Event =
/*#__PURE__*/
function () {
  function Event(o) {
    _classCallCheck(this, Event);

    this.isDefaultPrevented = false;
    this.isPropagationStopped = false;
    this.isImmediatePropagationStopped = false;
    var self = this;
    Object.keys(o).forEach(function (k) {
      self[k] = o[k];
    });
    this.timeStamp = new Date().getTime();
  }

  _createClass(Event, [{
    key: "preventDefault",
    value: function preventDefault() {
      this.isDefaultPrevented = true;

      if (this.originalEvent && this.originalEvent.preventDefault) {
        this.originalEvent.preventDefault();
      }
    }
  }, {
    key: "stopPropagation",
    value: function stopPropagation() {
      this.isPropagationStopped = true;

      if (this.originalEvent && this.originalEvent.stopPropagation) {
        this.originalEvent.stopPropagation();
      }
    }
  }, {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      this.isImmediatePropagationStopped = true;

      if (this.originalEvent && this.originalEvent.stopImmediatePropagation) {
        this.originalEvent.stopImmediatePropagation();
      }

      this.stopPropagation();
    }
  }]);

  return Event;
}();

module.exports = Event;

/***/ }),

/***/ "./src/core/query.js":
/*!***************************!*\
  !*** ./src/core/query.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Util = __webpack_require__(/*! ./util.js */ "./src/core/util.js");

var Event = __webpack_require__(/*! ./event.js */ "./src/core/event.js");

var EventBase = __webpack_require__(/*! ./event-base.js */ "./src/core/event-base.js");

var EventUtil = __webpack_require__(/*! ./event-util.js */ "./src/core/event-util.js");

var cssNumber = {
  "animationIterationCount": true,
  "columnCount": true,
  "fillOpacity": true,
  "flexGrow": true,
  "flexShrink": true,
  "fontWeight": true,
  "lineHeight": true,
  "opacity": true,
  "order": true,
  "orphans": true,
  "widows": true,
  "zIndex": true,
  "zoom": true
};

var isWindow = function isWindow(obj) {
  return obj !== null && obj !== undefined && obj === obj.window;
};

var isDocument = function isDocument(obj) {
  return obj !== null && obj.nodeType === 9;
};

var isElement = function isElement(obj) {
  return obj !== null && obj.nodeType === 1;
};

var camelCaseHandler = function camelCaseHandler(all, letter) {
  return letter.toUpperCase();
};

var camelCase = function camelCase(string) {
  return string.replace(/-([a-z])/g, camelCaseHandler);
};

var getStyle = function getStyle(elem) {
  var view = elem.ownerDocument.defaultView;

  if (!view || !view.opener) {
    view = window;
  }

  return view.getComputedStyle(elem);
};

var elementDisplay = {};

var getDefaultDisplay = function getDefaultDisplay(nodeName) {
  if (!elementDisplay[nodeName]) {
    var element = document.createElement(nodeName);
    document.body.appendChild(element);
    var display = getStyle(element).display;
    element.parentNode.removeChild(element);
    elementDisplay[nodeName] = display;
  }

  return elementDisplay[nodeName];
};

var getElementDimension = function getElementDimension(node, dimension) {
  var dimensionProperty = dimension[0].toUpperCase() + dimension.slice(1);

  if (isWindow(node)) {
    return node["inner" + dimensionProperty];
  }

  if (isDocument(node)) {
    node = node.body;
  }

  var v = node["offset" + dimensionProperty];
  var style = getStyle(node);

  if (dimension === "width") {
    var borderLeftWidth = parseFloat(style.borderLeftWidth);
    var borderRightWidth = parseFloat(style.borderRightWidth);
    var paddingLeft = parseFloat(style.paddingLeft);
    var paddingRight = parseFloat(style.paddingRight);
    v = v - borderLeftWidth - borderRightWidth - paddingLeft - paddingRight; //console.log(v, style.width);

    return v;
  }

  var borderTopWidth = parseFloat(style.borderTopWidth);
  var borderBottomWidth = parseFloat(style.borderBottomWidth);
  var paddingTop = parseFloat(style.paddingTop);
  var paddingBottom = parseFloat(style.paddingBottom);
  v = v - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom; //console.log(v, style.height);

  return v;
};

var getJQuery = function getJQuery(jQuery) {
  jQuery = jQuery || window.jQuery || window.$;
  return jQuery;
};

var Query =
/*#__PURE__*/
function (_EventBase) {
  _inherits(Query, _EventBase);

  function Query(selector) {
    var _this;

    _classCallCheck(this, Query);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Query).call(this));
    _this.Query = "Query";
    _this.list = [];

    if (!selector) {
      return _possibleConstructorReturn(_this, _assertThisInitialized(_assertThisInitialized(_this)));
    }

    return _possibleConstructorReturn(_this, _this.create(selector));
  }

  _createClass(Query, [{
    key: "create",
    value: function create(selector) {
      if (selector instanceof Query) {
        return selector;
      }

      if (typeof selector === "string") {
        return this.createFromString(selector);
      }

      if (selector.nodeType || selector === window) {
        this.list = [selector];
        return this;
      }
    }
  }, {
    key: "createFromString",
    value: function createFromString(selector) {
      if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
        this.parseHTML(selector);
      } else {
        var nodeList = document.querySelectorAll(selector);

        for (var i = 0, l = nodeList.length; i < l; i++) {
          this.list[i] = nodeList[i];
        }
      }

      return this;
    }
  }, {
    key: "parseHTML",
    value: function parseHTML(str) {
      var div = document.createElement("div");
      div.innerHTML = str;
      var n = div.firstChild;

      while (n) {
        if (isElement(n)) {
          this.list.push(n);
        }

        n = n.nextSibling;
      }

      return this;
    } //====================================================================================

  }, {
    key: "get",
    value: function get(i) {
      return this.list[i];
    }
  }, {
    key: "size",
    value: function size() {
      return this.list.length;
    }
  }, {
    key: "first",
    value: function first() {
      return this.list[0];
    }
  }, {
    key: "each",
    value: function each(callback) {
      if (typeof callback !== "function") {
        return this;
      }

      var list = this.list;

      for (var i = 0, l = list.length; i < l; i++) {
        var node = list[i];
        var res = callback.call(self, node, i);

        if (res === false) {
          break;
        }
      }

      return this;
    }
  }, {
    key: "add",
    value: function add(item) {
      if (!item) {
        return this;
      }

      var list = this.list;

      if (item instanceof Query) {
        item.each(function (node) {
          list.push(node);
        });
        return this;
      }

      if (item.nodeType) {
        list.push(item);
      }

      return this;
    }
  }, {
    key: "empty",
    value: function empty() {
      this.each(function (node) {
        node.innerHTML = "";
      });
      return this;
    }
  }, {
    key: "remove",
    value: function remove() {
      this.unbind();
      this.each(function (node, i) {
        if (node && node.parentNode) {
          node.parentNode.removeChild(node);
        }
      });
      this.list = [];
      return this;
    }
  }, {
    key: "find",
    value: function find(selector) {
      var results = new Query();

      if (!selector || typeof selector !== "string") {
        return results;
      }

      this.each(function (node) {
        if (node && node.querySelectorAll) {
          var nodeList = node.querySelectorAll(selector);

          for (var i = 0, l = nodeList.length; i < l; i++) {
            results.add(nodeList[i]);
          }
        }
      });
      return results;
    }
  }, {
    key: "append",
    value: function append(selector) {
      if (!selector) {
        return this;
      }

      var child = new Query(selector);
      this.each(function (parentNode) {
        child.each(function (childNode) {
          parentNode.appendChild(childNode);
        });
      });
      return this;
    }
  }, {
    key: "appendTo",
    value: function appendTo(selector) {
      if (!selector) {
        return this;
      }

      var parent = new Query(selector);
      this.each(function (node) {
        parent.append(node);
      });
      return this;
    }
  }, {
    key: "html",
    value: function html(str) {
      if (arguments.length === 0) {
        var node = this.first();

        if (node) {
          return node.innerHTML;
        }

        return "";
      }

      this.each(function (node) {
        node.innerHTML = str;
      });
      return this;
    }
  }, {
    key: "width",
    value: function width(value) {
      if (arguments.length === 0) {
        var node = this.first();

        if (node) {
          return getElementDimension(node, "width");
        }

        return 0;
      }

      this.css("width", value);
      return this;
    }
  }, {
    key: "height",
    value: function height(value) {
      if (arguments.length === 0) {
        var node = this.first();

        if (node) {
          return getElementDimension(node, "height");
        }

        return 0;
      }

      this.css("height", value);
      return this;
    }
    /* eslint-disable complexity */

  }, {
    key: "css",
    value: function css(key, value) {
      if (!key) {
        return this;
      }

      var self = this;

      if (arguments.length === 1) {
        if (_typeof(key) === "object") {
          Object.keys(key).forEach(function (k) {
            self.css(k, key[k]);
          });
        } else {
          var node = this.first();

          if (node) {
            var style = getStyle(node);
            return style[camelCase(key)];
          }

          return null;
        }
      }

      this.each(function (node) {
        var v = value;

        if (typeof v === "number" && !cssNumber[key]) {
          v += "px";
        }

        node.style[key] = v;
      });
      return this;
    }
    /* eslint-enable */

  }, {
    key: "attr",
    value: function attr(key, value) {
      if (!key) {
        return this;
      }

      var self = this;

      if (arguments.length === 1) {
        if (_typeof(key) === "object") {
          Object.keys(key).forEach(function (k) {
            self.attr(k, key[k]);
          });
        } else {
          var node = this.first();

          if (node) {
            return node.getAttribute(key);
          }

          return null;
        }
      }

      this.each(function (node) {
        node.setAttribute(key, value);
      });
      return this;
    }
  }, {
    key: "removeAttr",
    value: function removeAttr(key) {
      if (!key) {
        return this;
      }

      this.each(function (node) {
        if (node.hasAttribute(key)) {
          node.removeAttribute(key);
        }
      });
      return this;
    }
  }, {
    key: "removeClass",
    value: function removeClass(str) {
      if (!str || typeof str !== "string") {
        return this;
      }

      var arr = str.split(" ");
      this.each(function (node) {
        if (node.classList) {
          arr.forEach(function (item) {
            if (item) {
              node.classList.remove(item);
            }
          });
        }
      });
      return this;
    }
  }, {
    key: "addClass",
    value: function addClass(str) {
      if (!str || typeof str !== "string") {
        return this;
      }

      var arr = str.split(" ");
      this.each(function (node) {
        if (node.classList) {
          arr.forEach(function (item) {
            if (item) {
              node.classList.add(item);
            }
          });
        }
      });
      return this;
    }
  }, {
    key: "hasClass",
    value: function hasClass(str) {
      if (!str || typeof str !== "string") {
        return false;
      }

      var has = false;
      this.each(function (node) {
        if (node.classList) {
          var res = node.classList.contains(str);

          if (res) {
            has = true;
            return false;
          }
        }
      });
      return has;
    }
  }, {
    key: "show",
    value: function show() {
      this.each(function (node) {
        if (!isElement(node)) {
          return;
        }

        var display = getDefaultDisplay(node.nodeName);
        node.style.display = display;
      });
      return this;
    }
  }, {
    key: "hide",
    value: function hide() {
      this.each(function (node) {
        if (!isElement(node)) {
          return;
        }

        var display = node.style.display;

        if (display === "none") {
          return;
        }

        node.style.display = "none";
      });
      return this;
    }
  }, {
    key: "focus",
    value: function focus() {
      var node = this.first();

      if (node && node.focus) {
        node.focus();
      }

      return this;
    }
  }, {
    key: "blur",
    value: function blur() {
      var node = this.first();

      if (node && node.blur) {
        node.blur();
      }

      return this;
    }
  }, {
    key: "click",
    value: function click() {
      var node = this.first();

      if (node && node.click) {
        node.click();
      }

      return this;
    }
  }, {
    key: "select",
    value: function select() {
      var node = this.first();

      if (node && node.select) {
        node.select();
      }

      return this;
    }
  }, {
    key: "change",
    value: function change() {
      EventUtil.sendElementEvent(this, "change");
      return this;
    }
  }, {
    key: "val",
    value: function val(v) {
      var node = this.first();

      if (arguments.length) {
        if (node) {
          node.value = v;
        }

        return this;
      }

      if (node) {
        return node.value;
      }

      return "";
    }
  }, {
    key: "offset",
    value: function offset() {
      var rect = {
        left: 0,
        top: 0
      };
      var node = this.first();

      if (node) {
        var br = node.getBoundingClientRect();
        rect.left = br.left + window.pageXOffset;
        rect.top = br.top + window.pageYOffset;
      }

      return rect;
    }
  }, {
    key: "clone",
    value: function clone() {
      var q = new Query();
      this.each(function (node) {
        if (node && node.cloneNode) {
          var copy = node.cloneNode(true);
          q.add(copy);
        }
      });
      return q;
    }
  }, {
    key: "hasNode",
    value: function hasNode(target) {
      var has = false;
      this.each(function (node) {
        if (node === target) {
          has = true;
          return false;
        }
      });
      return has;
    }
  }, {
    key: "contains",
    value: function contains(elem) {
      var target = new Query(elem).first();

      if (!target) {
        return false;
      }

      var who = false;
      this.each(function (node) {
        if (Util.contains(node, target)) {
          who = node;
          return false;
        }
      });
      return who;
    }
  }, {
    key: "children",
    value: function children() {
      var q = new Query();
      this.each(function (node) {
        var n = node.firstChild;

        while (n) {
          q.add(n);
          n = n.nextSibling;
        }
      });
      return q;
    }
  }, {
    key: "parent",
    value: function parent() {
      var node = this.first();

      if (node) {
        return new Query(node.parentNode);
      }

      return new Query();
    }
  }, {
    key: "closest",
    value: function closest(parentTarget, parentRoot) {
      var $root = new Query(parentRoot);
      var $target = $root.find(parentTarget);
      var who;
      this.each(function (node) {
        while (node) {
          if ($root.hasNode(node)) {
            break;
          }

          if ($target.hasNode(node)) {
            who = node;
            return false;
          }

          node = node.parentNode;
        }
      });
      return new Query(who);
    }
  }, {
    key: "is",
    value: function is(str) {
      if (!str) {
        return false;
      }

      var arr = str.split(",");
      var res = true;
      this.each(function (node) {
        //window no nodeName
        if (!node.nodeName) {
          res = false;
          return false;
        }

        var name = node.nodeName.toLowerCase();

        if (!Util.inlist(name, arr)) {
          res = false;
          return false;
        }
      });
      return res;
    }
  }, {
    key: "toJQuery",
    value: function toJQuery(jQuery) {
      jQuery = getJQuery(jQuery);

      if (!jQuery) {
        return null;
      }

      var $el;
      this.each(function (node) {
        if ($el) {
          $el.add(node);
        } else {
          $el = jQuery(node);
        }
      });
      return $el;
    }
  }, {
    key: "toString",
    value: function toString() {
      return "[object Query]";
    }
  }]);

  return Query;
}(EventBase);

var query = function query(selector) {
  return new Query(selector);
};

query.Event = function (type, option) {
  var o = Util.merge({}, option, {
    type: type
  });
  return new Event(o);
};

query.getJQuery = getJQuery;
module.exports = query;

/***/ }),

/***/ "./src/core/util.js":
/*!**************************!*\
  !*** ./src/core/util.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Util = {
  //=================================================================================
  //strings
  //to string type
  tostr: function tostr(str) {
    if (typeof str === "function") {
      return Util.tostr(str.call());
    }

    return "" + str;
  },
  //zero fixed
  zero: function zero(s, l) {
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
  token: function token(len) {
    var str = Math.random().toString().substr(2);

    if (len) {
      str = str.substr(0, Util.tonum(len));
    }

    return str;
  },
  //=================================================================================
  //number
  //if is valid number
  isnum: function isnum(num) {
    if (typeof num !== "number" || isNaN(num)) {
      return false;
    }

    var isInvalid = function isInvalid(n) {
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
  tonum: function tonum(num, toInt) {
    if (typeof num !== "number") {
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
  numfix: function numfix(num, fix) {
    var n = Util.tonum;
    var f = Util.isnum(fix) ? fix : 2;
    return n(num).toFixed(n(f, true));
  },
  clamp: function clamp(num, min, max) {
    return Math.max(Math.min(num, max), min);
  },
  per: function per(num) {
    num = Util.tonum(num);
    num = Util.clamp(num, 0, 1);
    return num;
  },
  htmlEncode: function htmlEncode(html) {
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
  replace: function replace(str, obj) {
    str = Util.tostr(str);

    if (!obj) {
      return str;
    }

    str = str.replace(/\{([^\}]+)\}/g, function (match, key) {
      if (!obj.hasOwnProperty(key)) {
        return match;
      }

      var val = obj[key];

      if (typeof val === "function") {
        val = val(obj, key);
      }

      if (typeof val === "undefined") {
        val = "";
      }

      return val;
    });
    return str;
  },
  //whether data is array with length
  islist: function islist(data) {
    if (data && data instanceof Array && data.length > 0) {
      return true;
    }

    return false;
  },
  //whether item in list
  inlist: function inlist(item, list) {
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
  getValue: function getValue(data, path, defaultValue) {
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

      if (typeof value !== "undefined") {
        return value;
      }
    }

    return defaultValue;
  },
  merge: function merge() {
    var arg = arguments;
    var len = arg.length; //no parameters

    if (!len) {
      return {};
    } //deep merge depend on last parameter 


    var deep = true;

    if (arg[len - 1] === false) {
      deep = false;
    } //===================================


    var isobj = Util.isobj;
    var merge = Util.merge; //===================================

    var copyArray = function copyArray(item, base) {
      //merge array to base
      var size = item.length;

      for (var k = 0; k < size; k++) {
        var vk = item[k];

        if (deep && isobj(vk)) {
          base[k] = merge(base[k], vk);
        } else {
          base[k] = vk;
        }
      } //length fixing for array


      base.length = size;
    };

    var copyObject = function copyObject(item, base) {
      //merge object to base
      Object.keys(item).forEach(function (n) {
        var v = item[n];

        if (base.hasOwnProperty(n) && deep && isobj(v)) {
          base[n] = merge(base[n], v);
        } else {
          base[n] = v;
        }
      });
    };

    var copyAO = function copyAO(item, base) {
      //merge to base
      if (item instanceof Array) {
        copyArray(item, base);
      } else {
        copyObject(item, base);
      }
    };

    var eachCopy = function eachCopy() {
      //base merge result
      var base = null;

      for (var i = 0; i < len; i++) {
        var item = arg[i]; //only for valid object or array

        if (!isobj(item)) {
          continue;
        } //base type depend on first parameter


        if (base === null) {
          base = item instanceof Array ? [] : {};
        }

        copyAO(item, base);
      }

      return base;
    };

    var base = eachCopy();
    return base;
  },
  //if is plain object or array
  isobj: function isobj(obj) {
    if (!obj || _typeof(obj) !== "object" || typeof obj.constructor !== "function") {
      return false;
    }

    var isAO = function isAO(o) {
      //does not need toString in Array
      if (o.constructor === Array) {
        return true;
      }

      if (o.constructor === Object && typeof o.toString === "function" && o.toString() === "[object Object]") {
        //remove like Math Window ...
        return true;
      }

      return false;
    };

    if (isAO(obj)) {
      return true;
    }

    return false;
  }
};
module.exports = Util;

/***/ }),

/***/ "./src/core/view-base.js":
/*!*******************************!*\
  !*** ./src/core/view-base.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var EventBase = __webpack_require__(/*! ./event-base.js */ "./src/core/event-base.js");

var $ = __webpack_require__(/*! ./query.js */ "./src/core/query.js");

var ViewBase =
/*#__PURE__*/
function (_EventBase) {
  _inherits(ViewBase, _EventBase);

  function ViewBase() {
    var _this;

    _classCallCheck(this, ViewBase);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ViewBase).call(this));
    _this.holder = null;
    _this.container = null;
    _this.containerAutoResize = true;
    _this.width = 0;
    _this.height = 0;
    _this.visible = true;
    return _this;
  } //================================


  _createClass(ViewBase, [{
    key: "getContainer",
    value: function getContainer() {
      return this.container;
    }
  }, {
    key: "setContainer",
    value: function setContainer(container) {
      this.container = $(container);
      return this;
    } //================================
    //size api

  }, {
    key: "setSize",
    value: function setSize() {
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
  }, {
    key: "getNewSize",
    value: function getNewSize() {
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
  }, {
    key: "setSizeNow",
    value: function setSizeNow() {
      if (!this.containerAutoResize) {
        this.container.width(this.width).height(this.height);
      }

      this.trigger("resize");
      return this;
    } //get and update current size base on container

  }, {
    key: "getSize",
    value: function getSize(holder) {
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
    } //================================
    //visible api

  }, {
    key: "show",
    value: function show() {
      if (this.container) {
        this.container.show();
      }

      this.visible = true;
      this.trigger("display", true);
      return this;
    }
  }, {
    key: "hide",
    value: function hide() {
      this.visible = false;

      if (this.container) {
        this.container.hide();
      }

      this.trigger("display", false);
      return this;
    } //================================
    //remove api

  }, {
    key: "beforeRemove",
    value: function beforeRemove() {
      //override
      return this;
    }
  }, {
    key: "remove",
    value: function remove() {
      this.beforeRemove();
      this.hide();
      this.unbind();
      return this;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.remove();

      if (this.container) {
        this.container.remove();
        this.container = null;
      }
    } //================================
    //common api
    //find child from current container

  }, {
    key: "find",
    value: function find(context, container) {
      return $(container || this.container).find(context);
    }
  }, {
    key: "contains",
    value: function contains(container, target) {
      container = $(container).get(0);
      target = $(target).get(0); //(container, target);

      if (!container || !target) {
        return false;
      }

      return $.contains(container, target);
    } //class print

  }, {
    key: "toString",
    value: function toString() {
      return "[object ViewBase]";
    }
  }]);

  return ViewBase;
}(EventBase);

module.exports = ViewBase;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var CMP = __webpack_require__(/*! ./cmp/cmp.js */ "./src/cmp/cmp.js");

var cmp5 = {
  CMP: CMP
};
module.exports = cmp5;

/***/ }),

/***/ "./src/list/list.js":
/*!**************************!*\
  !*** ./src/list/list.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

var $ = __webpack_require__(/*! ../core/query.js */ "./src/core/query.js");

var ViewBase = __webpack_require__(/*! ../core/view-base.js */ "./src/core/view-base.js");

var CMPList =
/*#__PURE__*/
function (_ViewBase) {
  _inherits(CMPList, _ViewBase);

  function CMPList() {
    _classCallCheck(this, CMPList);

    return _possibleConstructorReturn(this, _getPrototypeOf(CMPList).call(this));
  }

  _createClass(CMPList, [{
    key: "draw",
    value: function draw(option) {
      this.option = option;
      this.container = $(option.container).empty();
      this.list = option.list;
      this.index = -1;
      var self = this;
      this.list.forEach(function (item, index) {
        self.drawItem(item, index);
      });
      this.find(".cmp_list_item").bind("click", function (e) {
        var $item = $(this);

        if ($item.hasClass("cmp_list_item")) {
          self.itemClickHandler($item);
        }
      });
    }
  }, {
    key: "itemClickHandler",
    value: function itemClickHandler($item) {
      var index = $item.attr("data");
      this.indexHandler(index);
    }
  }, {
    key: "next",
    value: function next() {
      var index = Util.tonum(this.index) + 1;

      if (index > this.list.length - 1) {
        index = 0;
      }

      index = Util.clamp(index, 0, this.list.length - 1);
      this.indexHandler(index);
    }
  }, {
    key: "indexHandler",
    value: function indexHandler(index) {
      var item = this.list[index];

      if (!item) {
        return;
      }

      this.find(".cmp_list_item").removeClass("selected");
      this.find(".cmp_list_item[data='" + index + "']").addClass("selected");
      this.index = index;
      this.trigger("change", item);
    }
  }, {
    key: "drawItem",
    value: function drawItem(item, index) {
      var $item = $("<div/>").attr("data", index).addClass("cmp_list_item").appendTo(this.container);
      $item.html(item.label);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "[object CMPList]";
    }
  }]);

  return CMPList;
}(ViewBase);

module.exports = CMPList;

/***/ }),

/***/ "./src/skin/base.scss":
/*!****************************!*\
  !*** ./src/skin/base.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./base.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/skin/base.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/skin/layout.scss":
/*!******************************!*\
  !*** ./src/skin/layout.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./layout.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/skin/layout.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/ui/loading/loading.gif":
/*!************************************!*\
  !*** ./src/ui/loading/loading.gif ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhEAALAPQAAAAAAP///yQkJC4uLhQUFPj4+P///9DQ0Hx8fJ6enkRERNzc3LS0tHR0dJqamkBAQNjY2Pr6+rCwsBgYGCYmJgoKCsbGxiIiIgwMDEhISF5eXjQ0NBAQEAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCwAAACwAAAAAEAALAAAFLSAgjmRpnqSgCuLKAq5AEIM4zDVw03ve27ifDgfkEYe04kDIDC5zrtYKRa2WQgAh+QQJCwAAACwAAAAAEAALAAAFJGBhGAVgnqhpHIeRvsDawqns0qeN5+y967tYLyicBYE7EYkYAgAh+QQJCwAAACwAAAAAEAALAAAFNiAgjothLOOIJAkiGgxjpGKiKMkbz7SN6zIawJcDwIK9W/HISxGBzdHTuBNOmcJVCyoUlk7CEAAh+QQJCwAAACwAAAAAEAALAAAFNSAgjqQIRRFUAo3jNGIkSdHqPI8Tz3V55zuaDacDyIQ+YrBH+hWPzJFzOQQaeavWi7oqnVIhACH5BAkLAAAALAAAAAAQAAsAAAUyICCOZGme1rJY5kRRk7hI0mJSVUXJtF3iOl7tltsBZsNfUegjAY3I5sgFY55KqdX1GgIAIfkECQsAAAAsAAAAABAACwAABTcgII5kaZ4kcV2EqLJipmnZhWGXaOOitm2aXQ4g7P2Ct2ER4AMul00kj5g0Al8tADY2y6C+4FIIACH5BAkLAAAALAAAAAAQAAsAAAUvICCOZGme5ERRk6iy7qpyHCVStA3gNa/7txxwlwv2isSacYUc+l4tADQGQ1mvpBAAIfkECQsAAAAsAAAAABAACwAABS8gII5kaZ7kRFGTqLLuqnIcJVK0DeA1r/u3HHCXC/aKxJpxhRz6Xi0ANAZDWa+kEAA7AAAAAAAAAAAAPGJyIC8+CjxiPldhcm5pbmc8L2I+OiAgbXlzcWxfcXVlcnkoKSBbPGEgaHJlZj0nZnVuY3Rpb24ubXlzcWwtcXVlcnknPmZ1bmN0aW9uLm15c3FsLXF1ZXJ5PC9hPl06IENhbid0IGNvbm5lY3QgdG8gbG9jYWwgTXlTUUwgc2VydmVyIHRocm91Z2ggc29ja2V0ICcvdmFyL3J1bi9teXNxbGQvbXlzcWxkLnNvY2snICgyKSBpbiA8Yj4vaG9tZS9hamF4bG9hZC93d3cvbGlicmFpcmllcy9jbGFzcy5teXNxbC5waHA8L2I+IG9uIGxpbmUgPGI+Njg8L2I+PGJyIC8+CjxiciAvPgo8Yj5XYXJuaW5nPC9iPjogIG15c3FsX3F1ZXJ5KCkgWzxhIGhyZWY9J2Z1bmN0aW9uLm15c3FsLXF1ZXJ5Jz5mdW5jdGlvbi5teXNxbC1xdWVyeTwvYT5dOiBBIGxpbmsgdG8gdGhlIHNlcnZlciBjb3VsZCBub3QgYmUgZXN0YWJsaXNoZWQgaW4gPGI+L2hvbWUvYWpheGxvYWQvd3d3L2xpYnJhaXJpZXMvY2xhc3MubXlzcWwucGhwPC9iPiBvbiBsaW5lIDxiPjY4PC9iPjxiciAvPgo8YnIgLz4KPGI+V2FybmluZzwvYj46ICBteXNxbF9xdWVyeSgpIFs8YSBocmVmPSdmdW5jdGlvbi5teXNxbC1xdWVyeSc+ZnVuY3Rpb24ubXlzcWwtcXVlcnk8L2E+XTogQ2FuJ3QgY29ubmVjdCB0byBsb2NhbCBNeVNRTCBzZXJ2ZXIgdGhyb3VnaCBzb2NrZXQgJy92YXIvcnVuL215c3FsZC9teXNxbGQuc29jaycgKDIpIGluIDxiPi9ob21lL2FqYXhsb2FkL3d3dy9saWJyYWlyaWVzL2NsYXNzLm15c3FsLnBocDwvYj4gb24gbGluZSA8Yj42ODwvYj48YnIgLz4KPGJyIC8+CjxiPldhcm5pbmc8L2I+OiAgbXlzcWxfcXVlcnkoKSBbPGEgaHJlZj0nZnVuY3Rpb24ubXlzcWwtcXVlcnknPmZ1bmN0aW9uLm15c3FsLXF1ZXJ5PC9hPl06IEEgbGluayB0byB0aGUgc2VydmVyIGNvdWxkIG5vdCBiZSBlc3RhYmxpc2hlZCBpbiA8Yj4vaG9tZS9hamF4bG9hZC93d3cvbGlicmFpcmllcy9jbGFzcy5teXNxbC5waHA8L2I+IG9uIGxpbmUgPGI+Njg8L2I+PGJyIC8+CjxiciAvPgo8Yj5XYXJuaW5nPC9iPjogIG15c3FsX3F1ZXJ5KCkgWzxhIGhyZWY9J2Z1bmN0aW9uLm15c3FsLXF1ZXJ5Jz5mdW5jdGlvbi5teXNxbC1xdWVyeTwvYT5dOiBDYW4ndCBjb25uZWN0IHRvIGxvY2FsIE15U1FMIHNlcnZlciB0aHJvdWdoIHNvY2tldCAnL3Zhci9ydW4vbXlzcWxkL215c3FsZC5zb2NrJyAoMikgaW4gPGI+L2hvbWUvYWpheGxvYWQvd3d3L2xpYnJhaXJpZXMvY2xhc3MubXlzcWwucGhwPC9iPiBvbiBsaW5lIDxiPjY4PC9iPjxiciAvPgo8YnIgLz4KPGI+V2FybmluZzwvYj46ICBteXNxbF9xdWVyeSgpIFs8YSBocmVmPSdmdW5jdGlvbi5teXNxbC1xdWVyeSc+ZnVuY3Rpb24ubXlzcWwtcXVlcnk8L2E+XTogQSBsaW5rIHRvIHRoZSBzZXJ2ZXIgY291bGQgbm90IGJlIGVzdGFibGlzaGVkIGluIDxiPi9ob21lL2FqYXhsb2FkL3d3dy9saWJyYWlyaWVzL2NsYXNzLm15c3FsLnBocDwvYj4gb24gbGluZSA8Yj42ODwvYj48YnIgLz4K"

/***/ }),

/***/ "./src/ui/loading/loading.html":
/*!*************************************!*\
  !*** ./src/ui/loading/loading.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\"> <div class=\"loading_mask\"></div> <div class=\"loading_main\"></div> <div class=\"loading_text\"></div> </div>";

/***/ }),

/***/ "./src/ui/loading/loading.js":
/*!***********************************!*\
  !*** ./src/ui/loading/loading.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var $ = __webpack_require__(/*! ../../core/query.js */ "./src/core/query.js");

var ViewBase = __webpack_require__(/*! ../../core/view-base.js */ "./src/core/view-base.js");

__webpack_require__(/*! ./loading.scss */ "./src/ui/loading/loading.scss");

var template = __webpack_require__(/*! ./loading.html */ "./src/ui/loading/loading.html");

var Loading =
/*#__PURE__*/
function (_ViewBase) {
  _inherits(Loading, _ViewBase);

  function Loading() {
    var _this;

    _classCallCheck(this, Loading);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Loading).call(this));
    _this.visible = false;
    return _this;
  }

  _createClass(Loading, [{
    key: "create",
    value: function create() {
      this.elem = $(template).appendTo(this.container);
      this.mask = this.elem.find(".loading_mask");
      this.main = this.elem.find(".loading_main");
      this.text = this.elem.find(".loading_text");
    }
  }, {
    key: "setText",
    value: function setText(text) {
      text = text || "";

      if (this.text) {
        this.text.html(text);
      }

      return this;
    }
  }, {
    key: "show",
    value: function show(text) {
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
  }, {
    key: "hide",
    value: function hide() {
      this.elem.hide();
      this.setText("");
      return this;
    }
  }, {
    key: "toString",
    value: function toString() {
      return "[object Loading]";
    }
  }]);

  return Loading;
}(ViewBase);

module.exports = Loading;

/***/ }),

/***/ "./src/ui/loading/loading.scss":
/*!*************************************!*\
  !*** ./src/ui/loading/loading.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./loading.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/ui/loading/loading.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
});
//# sourceMappingURL=cmp5.js.map