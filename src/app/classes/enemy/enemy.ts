import { Tower } from '../tower/tower';
import { Position } from '../position/position';
import { Action } from '../action/action';
import { Bullet } from '../bullet/bullet';

export class Enemy extends Tower {
  speed: number;

  constructor(properties: Object = {}) {
    super(properties);
  }

  doAction(bullet: Bullet): Enemy {
    return this;
  }
}
