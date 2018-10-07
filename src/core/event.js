class Event {
    constructor(o) {

        this.isDefaultPrevented = false;
        this.isPropagationStopped = false;
        this.isImmediatePropagationStopped = false;

        var self = this;
        Object.keys(o).forEach(function(k) {
            self[k] = o[k];
        });
        this.timeStamp = new Date().getTime();
    }


    preventDefault() {
        this.isDefaultPrevented = true;
        if (this.originalEvent && this.originalEvent.preventDefault) {
            this.originalEvent.preventDefault();
        }
    }

    stopPropagation() {
        this.isPropagationStopped = true;
        if (this.originalEvent && this.originalEvent.stopPropagation) {
            this.originalEvent.stopPropagation();
        }
    }

    stopImmediatePropagation() {
        this.isImmediatePropagationStopped = true;
        if (this.originalEvent && this.originalEvent.stopImmediatePropagation) {
            this.originalEvent.stopImmediatePropagation();
        }
        this.stopPropagation();
    }

}

module.exports = Event;