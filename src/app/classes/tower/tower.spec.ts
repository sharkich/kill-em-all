/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { Tower } from './tower';
import { Position } from '../position/position';
import { Action } from '../action/action';
import { ActionType } from '../../enums/action-type.enum';

describe('Tower', () => {

  it('should create an instance', () => {
    expect(new Tower()).toBeTruthy();
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
    const tower = new Tower({
      id: 123,
      position,
      actions: [
        action
      ],
      liveMax: 158923.19,
      live: 1583.19
    });
    expect(tower.id).toEqual(123);
    expect(tower.position).toEqual(position);
    expect(tower.actions[0]).toEqual(action);
    expect(tower.liveMax).toEqual(158923.19);
    expect(tower.live).toEqual(1583.19);
  });

});
