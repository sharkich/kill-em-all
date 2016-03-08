import Events from '../../helpers/events/events';
let events = new Events();

/**
 * Abstract class for Game Modes
 */
class GameMode {
    /**
     * Init Game mode
     */
    constructor () {
        console.log('init Game mode');
        // reload canvas onClick
        events.on('game:mouseclick', this.show, this);
    }

    /**
     * Init game mode
     */
    init (config, stage) {
        console.log('init game mode');
        this.config = config;
        this.stage = stage;
    }

    /**
     * Show game mode
     */
    show () {
        //console.log('show game mode');
        this.stage.update();
    }

    /**
     * Destroy game mode
     */
    destroy () {
        console.log('destroy game mode');
    }
}

export default GameMode;