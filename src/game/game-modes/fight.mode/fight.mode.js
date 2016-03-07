/* globals window */
const createjs = window.createjs;
import math from '../../../helpers/math.helper';
import GameMode from '../game.mode';
import Circle from '../../_components/circle/circle';

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

    /**
     * Show game mode
     */
    show () {
        super.show();

        //this.stage.update();
    }

    /**
     * Destroy game mode
     */
    destroy () {
        super.destroy();
    }
}

export default FightGameMode;