/**
 * Event-bus singleton
 */

let instance = null;

export class Events {

    constructor () {
        /**
         * singleton
         */
        if (!instance) {
            instance = this;
        }

        /**
         * Set of events
         * @type {object} of {array}
         */
        this.evens = {};

        return instance;
    }

    /**
     * Subscribe on event
     *
     * @param {string} eventName
     * @param {function} callback
     * @param {object} context
     */
    on (eventName, callback, context = {}) {
        console.log(`kel_event.on: ${eventName}`);
        if (!this.evens[eventName]) {
            this.evens[eventName] = [];
        }
        this.evens[eventName].push(callback.bind(context));
    }

    /**
     * Run event
     *
     * @param {string} eventName
     * @param {any} [params]
     */
    do (eventName, ...params) {
        console.log(`kel_event.do: ${eventName}`);
        if (this.evens[eventName]) {
            this.evens[eventName].forEach((cb) => {
                cb(...params);
            });
        } else {
            //TODO: remove all of component subscribes
            throw new Error('o_O Undefined event subscribe: ' + eventName);
        }
    }

}

export default Events;