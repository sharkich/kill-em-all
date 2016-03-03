/* globals window */
const createjs = window.createjs;

class Circle {
    constructor ({x = 0, y = 0, radius = 10}) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    /**
     * View for createjs
     *
     * @returns {object} for createjs
     */
    get view () {
        let view = new createjs.Shape();
        view.graphics.beginFill('DeepSkyBlue').drawCircle(this.x, this.y, this.radius);
        view.x = 100;
        view.y = 100;
        return view;
    }

}

export default Circle;
