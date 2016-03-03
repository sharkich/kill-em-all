/* globals window */
const createjs = window.createjs;

import Events from './../helpers/events/events';

import config from './game.config.json';
import scss from './game.scss';

let events = new Events();

/**
 * Main game class
 */
export class Game {

    /**
     * Constructor
     *
     * @param {string} canvasElementId
     */
    constructor (canvasElementId) {
        console.log('Game constructor');
        this.config = config;

        this.canvasElementId = canvasElementId;
        this.stage = new createjs.Stage(canvasElementId);

        this.mode = this.config.defaultMode;

        events.on('game:run', this.run, this);
        events.on('game:change-mode', this.changeGameMode, this);
    }

    /**
     * Start Game!
     */
    run () {
        events.do('game:change-mode', this.mode);
    }

    /**
     * Change game mode. One each `general-map`, `home-base`, `fight`
     * @param {string} gameMode
     */
    changeGameMode (gameMode) {
    }

}

export default Game;