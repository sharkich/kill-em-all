/* globals window */
const createjs = window.createjs;
import math from '../../../helpers/math.helper';
import GameMode from '../game.mode';
import Circle from '../../_components/circle/circle';

import Events from '../../../helpers/events/events';
let events = new Events();

class FightGameMode extends GameMode {
    /**
     * Init Game mode
     */
    constructor () {
        super();
        this.scale = 1;
    }

    /**
     * Init game mode
     */
    init (...params) {
        super.init(...params);

        // dragContainer
        this.dragContainer = new createjs.Container();
        this.stage.addChild(this.dragContainer);

        // dragBox
        let rect = new createjs.Graphics()
            .beginFill('grey')
            .drawRect(0, 0, this.config.fight.map.width, this.config.fight.map.height);
        let dragBox = new createjs.Shape(rect);
        this.dragContainer.addChild(dragBox);

        this._initCircle();

        events.on('game:mousewheel', this.zoom, this);

        this.dragContainer.on('pressmove', this._drag.bind(this));
        this.dragContainer.on('pressup', this._dragStop.bind(this));
    }

    _initCircle () {
        for (let i = 0; i <= 200; i++) {
            let circle = new Circle({
                x: math.getRandomInt(0, this.config.fight.map.width),
                y: math.getRandomInt(0,  this.config.fight.map.height),
                radius: math.getRandomInt(10, 100)
            });
            this.dragContainer.addChild(circle.view);
        }
    }

    // on pressmove
    _drag (evt) {
        console.log(this.dragContainer);
        if (!this.offset) {
            this.offset = {
                x: evt.stageX - this.dragContainer.x,
                y: evt.stageY - this.dragContainer.y
            };
        }

        this.dragToX(evt.stageX - this.offset.x);
        this.dragToY(evt.stageY - this.offset.y);

        console.log(this.dragContainer.x, this.dragContainer.y);

        this.show();
    }

    // on pressup
    _dragStop () {
        this.offset = null;
    }

    dragToX(x) {
        const MAX_CONVAS_OFFSET_X = this.config.fight.map.width - this.config.canvas.width;
        this.dragContainer.x = this._checkCoordinat(x, MAX_CONVAS_OFFSET_X * this.scale);
    }

    dragToY(y) {
        const MAX_CONVAS_OFFSET_Y = this.config.fight.map.height - this.config.canvas.height;
        this.dragContainer.y = this._checkCoordinat(y, MAX_CONVAS_OFFSET_Y * this.scale);
    }

    _checkCoordinat(value, maxValue) {
        if (value > 0) {
            return 0;
        }
        if (Math.abs(value) > maxValue) {
            return -maxValue;
        }
        return value;
    }

    /**
     * Show game mode
     */
    show () {
        super.show();

        //this.stage.update();
    }

    // on mousewheel
    zoom (evt) {
        const delta = evt.deltaY || evt.detail || evt.wheelDelta;

        if (delta < 0) {
            this.scale += 0.01;
        } else {
            this.scale -= 0.01;
        }

        if (this.scale > 1.5) {
            this.scale = 1.5;
        } else if (this.scale < 0.5) {
            this.scale = 0.5;
        }
        /*
         800 - 0.7
         600 - 0.5625
         */

        this.stage.scaleX = this.scale;
        this.stage.scaleY = this.scale;

        console.log('zoom', this.scale);
        this.show();
    }

    /**
     * Destroy game mode
     */
    destroy () {
        super.destroy();
    }
}

export default FightGameMode;