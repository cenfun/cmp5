define(function() {
    "use strict";

    var Util = require("./core/util.js");

    var EventBase = require("./core/event-base.js");

    var CMP5 = EventBase.extend({

    	constructor : function() {
    		console.log(this);
    	}

    });

    return CMP5;

});