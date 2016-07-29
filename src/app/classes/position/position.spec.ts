/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import {Position} from './position';

describe('Position', () => {
  it('should create an instance', () => {
    expect(new Position()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const position = new Position({
      x: 100.12,
      y: 200.15
    });
    expect(position.x).toEqual(100.12);
    expect(position.y).toEqual(200.15);
  });
});
