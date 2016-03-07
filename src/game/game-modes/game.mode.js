/**
 * Abstract class for Game Modes
 */
class GameMode {
    /**
     * Init Game mode
     */
    constructor () {
        console.log('init Game mode');
    }

    /**
     * Show game mode
     */
    show () {
        console.log('show game mode');
    }

    /**
     * Destroy game mode
     */
    destroy () {
        console.log('destroy game mode');
    }
}

export default GameMode;