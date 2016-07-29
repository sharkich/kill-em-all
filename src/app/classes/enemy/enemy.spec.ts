/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import {Enemy} from './enemy';
import { Position } from '../position/position';
import { Action } from '../action/action';
import { ActionType } from '../../enums/action-type.enum';

describe('Enemy', () => {

  it('should create an instance', () => {
    expect(new Enemy()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const action = new Action({
      target: 'live',
      actionType: ActionType.decrease,
      power: 123.12,
      timeout: 2.13
    });
    const position = new Position({
      x: 100.12,
      y: 200.15
    });
    const enemy = new Enemy({
      id: 123,
      position,
      actions: [
        action
      ],
      liveMax: 158923.19,
      live: 1583.19,

      speed: 100.2
    });
    expect(enemy.id).toEqual(123);
    expect(enemy.position).toEqual(position);
    expect(enemy.actions[0]).toEqual(action);
    expect(enemy.liveMax).toEqual(158923.19);
    expect(enemy.live).toEqual(1583.19);

    expect(enemy.speed).toEqual(100.2);
  });

});
