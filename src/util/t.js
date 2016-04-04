define(function() {
   /**
     * @author Cenfun
     */
    "use strict";

    var S = require("./s.js");
    var N = Number;

    //Tools
    var T = {

        //=================================================================================
        //strings
        //to string type
        tostr: function(str) {
            if (typeof(str) === S.FUNCTION) {
                return T.tostr(str.call());
            }
            return "" + str;
        },
        //zero fixed
        zero: function(s, l) {
            s = T.tostr(s);
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
            len = T.isnum(len) ? len : 8;
            var str = "";
            while (str.length < len) {
                str += Math.random().toString().substr(2);
            }
            str = str.substr(0, len);
            return str;
        },

        //=================================================================================
        //number
        //if is valid number
        isnum: function(num) {
            if (typeof(num) !== S.NUMBER || isNaN(num)) {
                return false;
            }
            var isInvalid = function(n) {
                if (n === N.MAX_VALUE || n === N.MIN_VALUE || n === N.NEGATIVE_INFINITY || n === N.POSITIVE_INFINITY) {
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
            if (typeof(num) !== S.NUMBER) {
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
            var n = T.tonum;
            var f = T.isnum(fix) ? fix : 2;
            return n(num).toFixed(n(f, true));
        },

        clamp: function(num, min, max) {
            return Math.max(Math.min(num, max), min);
        },
        per: function(num) {
            num = T.tonum(num);
            num = T.clamp(num, 0, 1);
            return num;
        },
        //pixel fixing for line
        pxfix: function(_linePos, _lineWidth, _lineAlign) {
            //always to int
            var linePos = T.tonum(_linePos, true);
            var lineWidth = Math.max(T.tonum(_lineWidth, true), 1);
            var lineAlign = T.tonum(_lineAlign);

            //mid align, always + offset, for example pos 0 draw in 0.5
            if (lineAlign === 0) {
                var fix = (lineWidth % 2) * 0.5;
                //snap to 0.5 of pos
                if (linePos >= _linePos) {
                    return linePos - fix;
                }
                return linePos + fix;
            }

            //left align, start
            if (lineAlign > 0) {
                return linePos + lineWidth * 0.5;
            }

            //right align, end
            return linePos - lineWidth * 0.5;
        },
        //string replace {name}
        replace: function(str, obj) {
            str = T.tostr(str);
            if (!obj) {
                return str;
            }
            str = str.replace(/\{([^\}]+)\}/g, function(match, name) {
                if (obj.hasOwnProperty(name)) {
                    return obj[name];
                }
                return match;
            });
            return str;
        },
        outrect: function(target, container, partly) {

            var outPartly = function(target, container) {
                if (target.x < container.x || target.x + target.width > container.x + container.width) {
                    return true;
                }
                if (target.y < container.y || target.y + target.height > container.y + container.height) {
                    return true;
                }
                return false;
            };

            var outCompletely = function(target, container) {
                if (target.x + target.width < container.x || target.x > container.x + container.width) {
                    return true;
                }
                if (target.y + target.height < container.y || target.y > container.y + container.height) {
                    return true;
                }
                return false;
            };

            if (target && container) {
                if (partly) {
                    if (outPartly(target, container)) {
                        return true;
                    }
                } else {
                    if (outCompletely(target, container)) {
                        return true;
                    }
                }
            }
            return false;
        },
        torect: function(obj) {
            obj = obj || {};
            //make it be able to write for IE11
            var rect = T.isobj(obj) ? obj : {};
            rect.x = T.tonum(obj.x);
            rect.y = T.tonum(obj.y);
            rect.width = T.tonum(obj.width);
            rect.height = T.tonum(obj.height);
            return rect;
        },
        distance: function(a, b) {
            var dx = a.x - b.x;
            var dy = a.y - b.y;
            return Math.sqrt(dx * dx + dy * dy);
        },
        //=================================================================================
        //array
        tolist: function(data) {
            if (!data) {
                return [];
            }
            if (data instanceof Array) {
                return data;
            }
            return [data];
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
            if (!T.islist(list)) {
                return false;
            }

            for (var i = 0, l = list.length; i < l; i++) {
                if (list[i] === item) {
                    return true;
                }
            }

            return false;
        },

        //=================================================================================
        //object
        //if is plain object or array
        isobj: function(obj) {
            if (!obj || typeof(obj) !== S.OBJECT || typeof(obj.constructor) !== S.FUNCTION) {
                return false;
            }
            var isAO = function(o) {
                //remove d3 object
                if (o.attr) {
                    return false;
                }
                //does not need toString in Array
                if (o.constructor === Array) {
                    return true;
                }
                if (o.constructor === Object && typeof(o.toString) === S.FUNCTION && o.toString() === "[object Object]") {
                    //remove like Math Window ...
                    return true;
                }
                return false;
            };

            if (isAO(obj)) {
                return true;
            }

            return false;
        },
        //if have same attributes with a target
        same: function(o, t) {
            if (o === t) {
                return true;
            }

            var isSameArrayItem = function(o, t) {
                for (var i = 0, l = o.length; i < l; i++) {
                    var oi = o[i];
                    var ti = t[i];
                    if (!T.same(oi, ti)) {
                        return false;
                    }
                }
                return true;
            };

            var isSameArray = function(o, t) {
                if (!(o instanceof Array) || !(t instanceof Array)) {
                    return false;
                }
                //same length
                if (o.length !== t.length) {
                    return false;
                }

                if (!isSameArrayItem(o, t)) {
                    return false;
                }

                return true;
            };

            var isSameObject = function(o, t) {
                //only if t have same attributes with o, maybe t more than o
                for (var k in o) {
                    if (!o.hasOwnProperty(k)) {
                        continue;
                    }
                    var ok = o[k];
                    var tk = t[k];
                    if (!T.same(ok, tk)) {
                        return false;
                    }
                }
                return true;
            };

            var isSameAO = function(o, t) {
                //array
                if (o instanceof Array || t instanceof Array) {
                    if (!isSameArray(o, t)) {
                        return false;
                    }
                } else {
                    if (!isSameObject(o, t)) {
                        return false;
                    }
                }
                return true;
            };

            var isSameDate = function(o, t) {
                if (!(o instanceof Date) || !(t instanceof Date)) {
                    return false;
                }
                if (o.getTime() !== t.getTime()) {
                    return false;
                }
                return true;
            };

            var isSame = function(o, t) {
                if (o instanceof Date || t instanceof Date) {
                    if (isSameDate(o, t)) {
                        return true;
                    }
                } else {
                    if (T.isobj(o) && T.isobj(t) && isSameAO(o, t)) {
                        return true;
                    }
                }
                return false;
            };
            if (typeof(o) !== typeof(t) || !isSame(o, t)) {
                return false;
            }
            return true;
        },
        //merge JSON
        merge: function() {
            var arg = arguments;
            var len = arg.length;
            //no parameters
            if (!len) {
                return {};
            }
            //deep merge depend on last parameter 
            var deep = true;
            if (arg[len - 1] === false) {
                deep = false;
            }
            //===================================
            var isobj = T.isobj;
            var merge = T.merge;
            //===================================

            var copyArray = function(item, base) {
                //merge array to base
                var size = item.length;
                for (var k = 0; k < size; k++) {
                    var vk = item[k];
                    if (deep && isobj(vk)) {
                        base[k] = merge(base[k], vk);
                    } else {
                        base[k] = vk;
                    }
                }
                //length fixing for array
                base.length = size;
            };

            var copyObject = function(item, base) {
                //merge object to base
                for (var n in item) {
                    if (!item.hasOwnProperty(n)) {
                        continue;
                    }
                    var vn = item[n];
                    if (deep && isobj(vn)) {
                        base[n] = merge(base[n], vn);
                    } else {
                        base[n] = vn;
                    }
                }
            };

            var copyAO = function(item, base) {
                //merge to base
                if (item instanceof Array) {
                    copyArray(item, base);
                } else {
                    copyObject(item, base);
                }
            };

            var eachCopy = function() {
                //base merge result
                var base = null;
                for (var i = 0; i < len; i++) {
                    var item = arg[i];
                    //only for valid object or array
                    if (!isobj(item)) {
                        continue;
                    }
                    //base type depend on first parameter
                    if (base === null) {
                        base = (item instanceof Array) ? [] : {};
                    }
                    copyAO(item, base);
                }
                return base;
            };

            var base = eachCopy();

            return base;
        },
        //copy a JSON object
        copy: function(obj) {
            if (T.isobj(obj)) {
                return T.merge(obj);
            }
            return obj;
        },
        //=================================================================================
        //date
        isdate: function(date) {
            if (!date || !(date instanceof Date)) {
                return false;
            }
            //is Date Object but Date {Invalid Date}
            if (isNaN(date.getTime())) {
                return false;
            }
            return true;
        },
        todate: function(date) {
            if (T.isdate(date)) {
                return date;
            }
            var d = new Date(date);
            if (T.isdate(d)) {
                return d;
            }
            var n = T.tonum(date);
            var dn = new Date(n);
            return dn;
        },

        //svg related
        //0: no scale
        //1: scale with keep width/height (default)
        //2: scale without keep width/height
        //3: scale with keep width/height and cut outside
        fit: function(pw, ph, tw, th, scalemode) {
            scalemode = T.tonum(scalemode, true);
            var rect = {
                x: 0,
                y: 0,
                width: tw,
                height: th,
                sx: 1,
                sy: 1,
                pw: pw,
                ph: ph
            };

            //============================
            //no scale 0
            if (scalemode <= 0 || scalemode > 3) {
                return rect;
            }
            //============================
            //scale 1,2,3

            var scalemode1 = function() {
                if (rect.sx > rect.sy) {
                    rect.sx = rect.sy;
                } else if (rect.sx < rect.sy) {
                    rect.sy = rect.sx;
                }
                rect.x = (pw - tw * rect.sx) * 0.5;
                rect.y = (ph - th * rect.sy) * 0.5;
            };

            var scalemode3 = function() {
                if (rect.sx > rect.sy) {
                    rect.sy = rect.sx;
                } else if (rect.sx < rect.sy) {
                    rect.sx = rect.sy;
                }
                rect.x = (pw - tw * rect.sx) * 0.5;
                rect.y = (ph - th * rect.sy) * 0.5;
            };

            var scalemode2 = function() {
                rect.sx = pw / tw;
                rect.sy = ph / th;
                if (scalemode === 1) {
                    //1: scale with keep width/height
                    scalemode1();
                } else if (scalemode === 3) {
                    //3: scale with keep width/height and cut outside
                    scalemode3();
                }
            };

            //2: scale without keep width/height
            scalemode2();

            return rect;
        },
        point: function(x, y) {
            return [T.tonum(x), T.tonum(y)].join(S.COMMA);
        },

        //transform
        translate: function(x, y) {
            return "translate(" + [T.tonum(x), T.tonum(y)] + ")";
        },
        scale: function(x, y) {
            return "scale(" + [T.tonum(x), T.tonum(y)] + ")";
        },

        getArcPath: function(x, y, rx, ry, rotation, clockwise) {
            ry = ry || rx;
            rotation = rotation || 0;
            var c = S.COMMA;
            var rs = "a" + rx + c + ry;
            var es = (rx * 2) + c + "0";
            var arr = ["M" + (x - rx) + c + y];
            arr.push(rs);
            arr.push(rotation + c);
            if (clockwise) {
                arr.push("1,1");
            } else {
                arr.push("1,0");
            }
            arr.push(es);
            arr.push(rs);
            arr.push(rotation + c);
            if (clockwise) {
                arr.push("0,1");
            } else {
                arr.push("0,0");
            }
            arr.push("-" + es);
            arr.push("z");
            return arr.join(S.SPACE);
        },

        getRectPath: function(x, y, w, h) {
            var p = T.point;
            var f = T.numfix;
            var arr = ["M" + p(x, y)];
            arr.push("h" + f(w, 1));
            arr.push("v" + f(h, 1));
            arr.push("h" + f(-w, 1));
            arr.push("v" + f(-h, 1));
            arr.push("z");
            return arr.join(S.SPACE);
        },

        //require dom
        getRect: function(elem) {
            //SVGRect x, y, width, height
            var bbox = null;
            if (elem.getBBox) {
                try {
                    bbox = elem.getBBox();
                } catch (e) {}
            }
            var rect = T.torect(bbox);
            return rect;
        }

    };


    return T;

});
