export class Events {

    constructor () {
        this.evens = {};
    }

    on (eventName, cb) {
        if (!this.evens[eventName]) {
            this.evens[eventName] = [];
        }
        this.evens[eventName].push(cb);
    }

    do (eventName, ...params) {
        if (this.evens[eventName]) {
            this.evens[eventName].forEach((cb) => {
                cb(...params);
            });
        }
    }

}

export default Events;