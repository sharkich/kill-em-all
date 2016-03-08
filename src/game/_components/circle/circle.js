import Events from '../../../helpers/events/events';
let events = new Events();

/* globals window */
const createjs = window.createjs;

class Circle {
    constructor ({x = 0, y = 0, radius = 10}) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.canvasView = null;
        this.isSelected = false;
    }

    /**
     * View for createjs
     *
     * @returns {object} for createjs
     */
    get view () {
        if (this.canvasView) {
            return this.canvasView;
        }

        this.canvasView = new createjs.Shape();
        this.canvasView.graphics.beginFill('black').drawCircle(this.x, this.y, this.radius);
        this.canvasView.x = 100;
        this.canvasView.y = 100;

        this.canvasView.on('click', this._onClick.bind(this));

        return this.canvasView;
    }

    _onClick () {
        events.do('circle:select', this);
        if (this.isSelected) {
            this.canvasView.graphics.beginFill('red').drawCircle(this.x, this.y, this.radius - 1);
        }
        console.log(this);
    }

}

export default Circle;
