import {
    it,
    inject,
    injectAsync,
    describe,
    beforeEachProviders,
    TestComponentBuilder
} from 'angular2/testing';

import {Component, provide} from 'angular2/core';

// Load the implementations that should be tested
import {Game} from './createjs-test.component.ts';

describe('Game', () => {
    // provide our implementations or mocks to the dependency injector
    beforeEachProviders(() => [
        Game
    ]);

    it('should log ngOnInit', inject([ Game ], (game) => {
        spyOn(console, 'log');
        expect(console.log).not.toHaveBeenCalled();

        game.ngOnInit();
        expect(console.log).toHaveBeenCalled();
    }));

});
