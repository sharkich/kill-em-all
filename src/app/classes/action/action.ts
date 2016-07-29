import { ActionType } from '../../enums/action-type.enum';

export class Action {
  target: string;
  actionType: ActionType;
  power: number;
  timeout: number;
  duration: number;

  constructor(properties: Object = {}) {
    Object.assign(this, properties);
  }

  doAction(target: Object = {}) {
  }
}
