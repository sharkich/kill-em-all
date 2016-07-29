/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { Bullet } from './bullet';
import { Position } from '../position/position';
import { Action } from '../action/action';
import { ActionType } from '../../enums/action-type.enum';
import { Enemy } from '../enemy/enemy';

describe('Bullet', () => {

  it('should create an instance', () => {
    expect(new Bullet()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const position = new Position({
      x: 12.2,
      y: 14.3
    });
    const destination = new Position({
      x: 30.2,
      y: 20.8
    });
    const target = new Enemy({
      id: 123,
      position,
      actions: [],
      liveMax: 158923.19,
      live: 1583.19,
      speed: 100.2
    });
    const action = new Action({
      target: 'live',
      actionType: ActionType.decrease,
      power: 123.12,
      timeout: 2.13
    });
    const bullet = new Bullet({
      position,
      action,
      speed: 0.12,
      destination,
      target
    });
    expect(bullet.position).toEqual(position);
    expect(bullet.action).toEqual(action);
    expect(bullet.speed).toEqual(0.12);
    expect(bullet.destination).toEqual(destination);
    expect(bullet.target).toEqual(target);
  });

});
