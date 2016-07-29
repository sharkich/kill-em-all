import { Position } from '../position/position';
import { Action } from '../action/action';
import { ActionType } from '../../enums/action-type.enum';
import { Enemy } from '../enemy/enemy';

const INFELICITY = 0.5;

export class Bullet {
  position: Position;
  action: Action;
  speed: number;
  destination: Position;
  target: Enemy;
  infelicity: number = INFELICITY;

  constructor(properties: Object = {}) {
    Object.assign(this, properties);
  }

  isAchievedX(): boolean {
    return Math.abs(this.destination.x - this.position.x) < this.infelicity;
  }

  isAchievedY(): boolean {
    return Math.abs(this.destination.y - this.position.y) < this.infelicity;
  }

  isAchieved (): boolean {
    return  this.isAchievedX() && this.isAchievedY();
  }

  doAction(target: Enemy): Enemy {
    if (this.isAchieved()) {
      return target.doAction(this);
    }

    return target;
  }
}
