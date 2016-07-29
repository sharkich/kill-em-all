import { Position } from '../position/position';
import { Action } from '../action/action';

export class Tower {
  id: number;

  position: Position;

  actions: Action[];

  liveMax: number;
  live: number;

  constructor(properties: Object = {}) {
    Object.assign(this, properties);
  }
}
