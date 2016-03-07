/* globals window */
const createjs = window.createjs;

import GameMode from '../game.mode';

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
        this.dragContainer = new createjs.Container();
        this.stage.addChild(this.dragContainer);

        let rect = new createjs.Graphics()
            .beginFill('green')
            .drawRect(0, 0, this.config.canvas.width, this.config.canvas.height);
        let dragBox = new createjs.Shape(rect);
        this.dragContainer.addChild(dragBox);
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