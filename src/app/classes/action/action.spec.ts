/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import {Action} from './action';
import { ActionType } from '../../enums/action-type.enum';

describe('Action', () => {

  it('should create an instance', () => {
    expect(new Action()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const action = new Action({
      target: 'live',
      actionType: ActionType.decrease,
      power: 123.12,
      timeout: 2.13
    });
    expect(action.target).toEqual('live');
    expect(action.actionType).toEqual(ActionType.decrease);
    expect(action.power).toEqual(123.12);
    expect(action.timeout).toEqual(2.13);
  });

});
