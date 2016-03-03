import Game from './game/game';
import Events from './helpers/events/events';

let events = new Events();
let game = new Game('game__canvas');

events.do('game:run');