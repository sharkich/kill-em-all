import config from './game.config.json';
import scss from './game.scss';

export class Game {

    constructor (events) {
        console.log('Game constructor');
        this.config = config;
        this.events = events;

        this.events.on('game-mode:change', this.changeGameMode);

        this.events.do('game-mode:change', this.config.defaultMode);

        console.log(this);
    }

    changeGameMode (gameMode) {
        console.log('changeGameMode to ' + gameMode);
    }

}

export default Game;