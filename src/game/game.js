/* globals window */
const createjs = window.createjs;

import Events from './../helpers/events/events';
let events = new Events();

import config from './game.config.json';
import scss from './game.scss';

import HomeBaseGameMode from './game-modes/home-base.mode/home-base.mode';
import GeneralMapGameMode from './game-modes/general-map.mode/general-map.mode';
import FightGameMode from './game-modes/fight.mode/fight.mode';

console.log(config);

/**
 * Main game class
 */
export class Game {

    /**
     * Constructor
     *
     * @param {string} canvasId
     */
    constructor (canvasId) {
        console.log('Game constructor');
        this.config = config;

        this.stage = new createjs.Stage(canvasId);
        createjs.Touch.enable(this.stage);

        this.gameModeName = this.config.defaultMode;

        events.on('game:run', this.run, this);
        events.on('game:change-mode', this.changeGameMode, this);
    }

    /**
     * Start Game!
     */
    run () {
        events.do('game:change-mode', this.gameModeName);
    }

    /**
     * Change game mode. One each `general-map`, `home-base`, `fight`
     *
     * @param {string} gameModeName
     */
    changeGameMode (gameModeName) {
        if (this.mode) {
            this.mode.destroy();
        }
        switch (gameModeName) {
            case 'fight':
                this.mode = new FightGameMode();
                break;
            case 'general-map':
                this.mode = new GeneralMapGameMode();
                break;
            case 'home-base':
                this.mode = new HomeBaseGameMode();
                break;
            default:
                throw new Error('O_O Undefined GameMode: ' + gameModeName);
        }
        this.mode.init(this.config, this.stage);
        this.mode.show();
    }

}

export default Game;