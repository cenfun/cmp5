define(function() {
    /**
     * @author Cenfun
     */
    "use strict";

    // custom events
    var E = {
        //=================================
        //system 
        MOUSEOVER: "mouseover",
        MOUSEOUT: "mouseout",
        MOUSEDOWN: "mousedown",
        MOUSEMOVE: "mousemove",
        MOUSEUP: "mouseup",
        MOUSEENTER: "mouseenter",
        MOUSELEAVE: "mouseleave",
        //Requires jquery.mousewheel.js
        MOUSEWHEEL: "mousewheel",
        CLICK: "click",
        DBLCLICK: "dblclick",
        CONTEXTMENU: "contextmenu",
        //
        FOCUS: "focus",
        BLUR: "blur",
        FOCUSIN: "focusin",
        FOCUSOUT: "focusout",
        //
        KEYDOWN: "keydown",
        KEYPRESS: "keypress",
        KEYUP: "keyup",
        ENTER: "enter",
        //=================================
        //common
        CHANGE: "change",
        RESIZE: "resize",
        SCROLL: "scroll",
        SELECT: "select",
        SUBMIT: "submit",
        HOVER: "hover",
        ERROR: "error",
        STATE: "state",
        DISPLAY: "display",
        //=================================
        //draw 
        DRAW_START: "draw_start",
        DRAW_UPDATE: "draw_update",
        DRAW_COMPLETE: "draw_complete",
        //=================================
        //item 
        ITEM_SELECT: "item_select",
        ITEM_CHANGE: "item_change",
        ITEM_HOVER: "item_hover",
        ITEM_OVER: "item_over",
        ITEM_OUT: "item_out",
        ITEM_DOWN: "item_down",
        ITEM_UP: "item_up",
        ITEM_CLICK: "item_click",
        ITEM_DBLCLICK: "item_dblclick",
        //=================================
        //main 
        MAIN_OVER: "main_over",
        MAIN_OUT: "main_out",
        MAIN_CLICK: "main_click",
        MAIN_DBLCLICK: "main_dblclick",
        MAIN_CONTEXTMENU: "main_contextmenu",
        //back 
        BACK_CLICK: "back_click",
        //=================================
        //animate
        ANIMATE_BEFORE: "animate_before",
        ANIMATE_START: "animate_start",
        ANIMATE_UPDATE: "animate_update",
        ANIMATE_COMPLETE: "animate_complete",
        ANIMATE_STOP: "animate_stop",
        //=================================s
        //drag
        DRAG_BEFORE: "drag_before",
        DRAG_START: "drag_start",
        DRAG_UPDATE: "drag_update",
        DRAG_COMPLETE: "drag_complete",
        //=================================
        //data 
        DATA_ERROR: "data_error",
        DATA_STATE: "data_state",
        DATA_READY: "data_ready",
        DATA_CHANGE: "data_change"
    };


    return E;

});
