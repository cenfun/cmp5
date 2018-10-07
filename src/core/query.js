var Util = require("./util.js");
var Event = require("./event.js");
var EventBase = require("./event-base.js");
var EventUtil = require("./event-util.js");
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

var isWindow = function(obj) {
    return obj !== null && obj !== undefined && obj === obj.window;
};

var isDocument = function(obj) {
    return obj !== null && obj.nodeType === 9;
};

var isElement = function(obj) {
    return obj !== null && obj.nodeType === 1;
};

var camelCaseHandler = function(all, letter) {
    return letter.toUpperCase();
};

var camelCase = function(string) {
    return string.replace(/-([a-z])/g, camelCaseHandler);
};

var getStyle = function(elem) {
    var view = elem.ownerDocument.defaultView;
    if (!view || !view.opener) {
        view = window;
    }
    return view.getComputedStyle(elem);
};

var elementDisplay = {};
var getDefaultDisplay = function(nodeName) {
    if (!elementDisplay[nodeName]) {
        var element = document.createElement(nodeName);
        document.body.appendChild(element);
        var display = getStyle(element).display;
        element.parentNode.removeChild(element);
        elementDisplay[nodeName] = display;
    }
    return elementDisplay[nodeName];
};

var getElementDimension = function(node, dimension) {
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
        v = v - borderLeftWidth - borderRightWidth - paddingLeft - paddingRight;
        //console.log(v, style.width);
        return v;
    }
    var borderTopWidth = parseFloat(style.borderTopWidth);
    var borderBottomWidth = parseFloat(style.borderBottomWidth);
    var paddingTop = parseFloat(style.paddingTop);
    var paddingBottom = parseFloat(style.paddingBottom);
    v = v - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom;
    //console.log(v, style.height);
    return v;
};

var getJQuery = function(jQuery) {
    jQuery = jQuery || window.jQuery || window.$;
    return jQuery;
};

class Query extends EventBase {

    constructor(selector) {
        super();
        this.Query = "Query";
        this.list = [];
        if (!selector) {
            return this;
        }
        return this.create(selector);
    }

    create(selector) {
        if (selector instanceof Query) {
            return selector;
        }
        if (typeof(selector) === "string") {
            return this.createFromString(selector);
        }
        if (selector.nodeType || selector === window) {
            this.list = [selector];
            return this;
        }
    }

    createFromString(selector) {
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

    parseHTML(str) {
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
    }

    //====================================================================================

    get(i) {
        return this.list[i];
    }

    size() {
        return this.list.length;
    }

    first() {
        return this.list[0];
    }

    each(callback) {
        if (typeof(callback) !== "function") {
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

    add(item) {
        if (!item) {
            return this;
        }
        var list = this.list;
        if (item instanceof Query) {
            item.each(function(node) {
                list.push(node);
            });
            return this;
        }
        if (item.nodeType) {
            list.push(item);
        }
        return this;
    }

    empty() {
        this.each(function(node) {
            node.innerHTML = "";
        });
        return this;
    }

    remove() {
        this.unbind();
        this.each(function(node, i) {
            if (node && node.parentNode) {
                node.parentNode.removeChild(node);
            }
        });
        this.list = [];
        return this;
    }

    find(selector) {
        var results = new Query();
        if (!selector || typeof(selector) !== "string") {
            return results;
        }
        this.each(function(node) {
            if (node && node.querySelectorAll) {
                var nodeList = node.querySelectorAll(selector);
                for (var i = 0, l = nodeList.length; i < l; i++) {
                    results.add(nodeList[i]);
                }
            }
        });
        return results;
    }

    append(selector) {
        if (!selector) {
            return this;
        }
        var child = new Query(selector);
        this.each(function(parentNode) {
            child.each(function(childNode) {
                parentNode.appendChild(childNode);
            });
        });
        return this;
    }

    appendTo(selector) {
        if (!selector) {
            return this;
        }
        var parent = new Query(selector);
        this.each(function(node) {
            parent.append(node);
        });
        return this;
    }

    html(str) {
        if (arguments.length === 0) {
            var node = this.first();
            if (node) {
                return node.innerHTML;
            }
            return "";
        }
        this.each(function(node) {
            node.innerHTML = str;
        });
        return this;
    }

    width(value) {
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

    height(value) {
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
    css(key, value) {
        if (!key) {
            return this;
        }
        var self = this;
        if (arguments.length === 1) {
            if (typeof(key) === "object") {
                Object.keys(key).forEach(function(k) {
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
        this.each(function(node) {
            var v = value;
            if (typeof(v) === "number" && !cssNumber[key]) {
                v += "px";
            }
            node.style[key] = v;
        });
        return this;
    }
    /* eslint-enable */

    attr(key, value) {
        if (!key) {
            return this;
        }
        var self = this;
        if (arguments.length === 1) {
            if (typeof(key) === "object") {
                Object.keys(key).forEach(function(k) {
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
        this.each(function(node) {
            node.setAttribute(key, value);
        });
        return this;
    }

    removeAttr(key) {
        if (!key) {
            return this;
        }
        this.each(function(node) {
            if (node.hasAttribute(key)) {
                node.removeAttribute(key);
            }
        });
        return this;
    }

    removeClass(str) {
        if (!str || typeof(str) !== "string") {
            return this;
        }
        var arr = str.split(" ");
        this.each(function(node) {
            if (node.classList) {
                arr.forEach(function(item) {
                    if (item) {
                        node.classList.remove(item);
                    }
                });
            }
        });
        return this;
    }

    addClass(str) {
        if (!str || typeof(str) !== "string") {
            return this;
        }
        var arr = str.split(" ");
        this.each(function(node) {
            if (node.classList) {
                arr.forEach(function(item) {
                    if (item) {
                        node.classList.add(item);
                    }
                });
            }
        });
        return this;
    }

    hasClass(str) {
        if (!str || typeof(str) !== "string") {
            return false;
        }
        var has = false;
        this.each(function(node) {
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

    show() {
        this.each(function(node) {
            if (!isElement(node)) {
                return;
            }
            var display = getDefaultDisplay(node.nodeName);
            node.style.display = display;
        });
        return this;
    }

    hide() {
        this.each(function(node) {
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

    focus() {
        var node = this.first();
        if (node && node.focus) {
            node.focus();
        }
        return this;
    }

    blur() {
        var node = this.first();
        if (node && node.blur) {
            node.blur();
        }
        return this;
    }

    click() {
        var node = this.first();
        if (node && node.click) {
            node.click();
        }
        return this;
    }

    select() {
        var node = this.first();
        if (node && node.select) {
            node.select();
        }
        return this;
    }

    change() {
        EventUtil.sendElementEvent(this, "change");
        return this;
    }

    val(v) {
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

    offset() {
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

    clone() {
        var q = new Query();
        this.each(function(node) {
            if (node && node.cloneNode) {
                var copy = node.cloneNode(true);
                q.add(copy);
            }
        });
        return q;
    }

    hasNode(target) {
        var has = false;
        this.each(function(node) {
            if (node === target) {
                has = true;
                return false;
            }
        });
        return has;
    }

    contains(elem) {
        var target = new Query(elem).first();
        if (!target) {
            return false;
        }
        var who = false;
        this.each(function(node) {
            if (Util.contains(node, target)) {
                who = node;
                return false;
            }
        });
        return who;
    }

    children() {
        var q = new Query();
        this.each(function(node) {
            var n = node.firstChild;
            while (n) {
                q.add(n);
                n = n.nextSibling;
            }
        });
        return q;
    }

    parent() {
        var node = this.first();
        if (node) {
            return new Query(node.parentNode);
        }
        return new Query();
    }

    closest(parentTarget, parentRoot) {
        var $root = new Query(parentRoot);
        var $target = $root.find(parentTarget);
        var who;
        this.each(function(node) {
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

    is(str) {
        if (!str) {
            return false;
        }
        var arr = str.split(",");
        var res = true;
        this.each(function(node) {
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

    toJQuery(jQuery) {
        jQuery = getJQuery(jQuery);
        if (!jQuery) {
            return null;
        }
        var $el;
        this.each(function(node) {
            if ($el) {
                $el.add(node);
            } else {
                $el = jQuery(node);
            }
        });
        return $el;
    }

    toString() {
        return "[object Query]";
    }

}

var query = function(selector) {
    return new Query(selector);
};

query.Event = function(type, option) {
    var o = Util.merge({}, option, {
        type: type
    });
    return new Event(o);
};

query.getJQuery = getJQuery;

module.exports = query;