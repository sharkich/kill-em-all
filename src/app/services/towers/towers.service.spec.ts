/* tslint:disable:no-unused-variable */

import {
  addProviders,
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TowersService } from './towers.service';

describe('Service: Towers', () => {
  beforeEach(() => {
    addProviders([TowersService]);
  });

  it('should ...',
    inject([TowersService],
      (service: TowersService) => {
        expect(service).toBeTruthy();
      }));
});
