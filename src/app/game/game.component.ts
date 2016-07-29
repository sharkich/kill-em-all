import {Component} from 'angular2/core';

import {CreateJS} from './views/createjs.d.ts';
const createjs: CreateJS = window['createjs'];

import {CanvasView} from './views/canvas/canvas';

import {Map} from './map/map';
import {Tower} from './towers/tower';
import {CircleTower} from './towers/circle-tower/circle-tower';

import {
    MAX_WIDTH,
    MAX_HEIGHT
} from './plain.conf';

console.log('`Game` component loaded asynchronously');

@Component({
    selector: 't-game',
    styles: [ require('./game.css') ],
    template: require('./game.html')
})
export class Game {

    canvas: CanvasView;

    towers: Tower[] = [];
    selectedTower: Tower;

    constructor() {
        window['towers'] = this.towers;// todo for test
    }

    /**
     * init canvas and towers
     */
    ngOnInit() {
        console.log('`Game` ngOnInit()');
        this.canvas = new CanvasView(createjs);
        window['canvas'] = this.canvas;// todo for test

        /**
         * random
         */
        const TOWER_COUNT = Math.round(Math.random() * 20);
        for (let i = 0; i <= TOWER_COUNT; i++) {
            const x = Math.round(Math.random() * MAX_WIDTH);
            const y = Math.round(Math.random() * MAX_HEIGHT);
            if (this.isEmptyCell(Map.cellNum(x), Map.cellNum(y))) {
                console.log(`add tower: ${x}x${y} (${Map.cellNum(x)}x${Map.cellNum(y)})`);
                this.addTower(new CircleTower({createjs, x, y, radius: 32}));
            } else {
                console.error(`full cell: ${x}x${y} (${Map.cellNum(x)}x${Map.cellNum(y)})`);
            }
        }

        /**
         * NOT random
         */
        // const TOWERS = [
        //     [100, 200],
        //     [500, 250],
        //     [100, 250]
        // ];
        // TOWERS.forEach((c) => {
        //     if (this.isEmptyCell(Map.cellNum(c[0]), Map.cellNum(c[1]))) {
        //         console.log(`add tower: ${c[0]}x${c[1]} (${Map.cellNum(c[0])}x${Map.cellNum(c[1])})`);
        //         this.addTower(new CircleTower({
        //             createjs,
        //             x: c[0],
        //             y: c[1],
        //             radius: 32
        //         }));
        //     } else {
        //         console.error(`full cell: ${c[0]}x${c[1]} (${Map.cellNum(c[0])}x${Map.cellNum(c[1])})`);
        //     }
        // });

        this.initTowersEventsListeners();
        this.initTowersClearPositions();
        this.canvas.render();
    }

    /**
     * Check is empty cell by cell numbers (can we build on the cell)
     * @param {number} xCell
     * @param {number} yCell
     * @returns {boolean}
     */
    isEmptyCell(xCell: number, yCell: number) {
        return !this.towers.some((tower) => tower.isCell(xCell, yCell));
    }

    /**
     * Add event listeners to all towers at this.towers array
     */
    initTowersEventsListeners() {
        this.towers.forEach((tower: Tower) => {

            tower.onClick((event) => {
                this.selectTower(tower);
                this.canvas.render();
            });

            tower.onDblClick((event) => {
                // todo: show tower props
                console.log(tower);
                this.canvas.render();
            });

            tower.onPressMove((event) => {
                if (this.selectedTower !== tower) {
                    this.selectTower(tower);
                }
                // todo: sticky to tile
                tower.moveTo(event.stageX, event.stageY);
                this.canvas.render();
            });

            tower.onPressUp((event) => {
                console.log('up');
                tower.moveToSticky();
                this.canvas.render();
            });

        });
    }

    /**
     * Init clear towers positions
     */
    initTowersClearPositions() {
        this.towers.forEach((tower: Tower) => {
            tower.moveToSticky();
        });
    }

    /**
     * Select tower as active
     */
    selectTower(tower) {
        console.log('selectTower');
        if (this.selectedTower) {
            this.selectedTower.unselect();
        }
        tower.select();
        this.selectedTower = tower;
    }

    /**
     * On close game - close all events listeners
     */
    ngOnDestroy() {
        console.log('`Game` ngOnDestroy()');
    }

    /**
     * Add tower to this.towers array and to canvas (view)
     * @param tower
     */
    addTower(tower: Tower) {
        this.towers.push(tower);
        this.canvas.addTower(tower);
    }

}
