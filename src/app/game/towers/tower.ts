import {CreateJS} from '../views/createjs.d';

import {Map} from '../map/map';

import {
    TILE_SIZE,
    TILE_HALF_SIZE
} from '../plain.conf';

export interface TowerOptions {
    createjs: any;
    x: number;
    y: number;
}

export class Tower {

    /**
     * createjs.*
     */
    view: any;

    position: {
        x: number,
        y: number,
        cell: {
            x: number,
            y: number
        }
    } = {
        x: undefined,
        y: undefined,
        cell: {
            x: undefined,
            y: undefined
        }
    };

    createjs: CreateJS;

    constructor(options: TowerOptions) {
        this.createjs = options.createjs;
        this.view = new this.createjs.Container();
        if (options.x !== undefined && options.y !== undefined) {
            this.moveTo(options.x, options.y);
        }
    }

    /**
     * Move tower to point with animation (without sticky to tail)
     * @param x
     * @param y
     */
    moveTo(x: number, y: number): void {
        this.position.x = this.view.x = x;
        this.position.y = this.view.y = y;
        this.position.cell.x = Map.cellNum(x);
        this.position.cell.y = Map.cellNum(y);
    }

    /**
     * Move tower to point with animation (with sticky to tail)
     * @param x
     * @param y
     */
    moveToSticky(): void {
        const xOK = this.position.cell.x * TILE_SIZE + TILE_HALF_SIZE;
        const yOK = this.position.cell.y * TILE_SIZE + TILE_HALF_SIZE;
        this.moveTo(xOK, yOK);
    }

    /**
     * Event handler for `click` 
     * @param {function} cb
     */
    onClick(cb: (event: any) => void) {
        this.view.on('click', cb);
    }

    /**
     * Event handler for `Double Click`
     * @param {function} cb
     */
    onDblClick(cb: (event: any) => void) {
        this.view.on('dblclick', cb);
    }

    /**
     * Event handler for `drag and drop`
     * @param {function} cb
     */
    onPressMove(cb: (event: any) => void) {
        this.view.on('pressmove', cb);
    }

    /**
     * Event handler for `drag and drop`
     * @param {function} cb
     */
    onPressUp(cb: (event: any) => void) {
        this.view.on('pressup', cb);
    }

    /**
     * Select tower as active
     */
    select() {
        this.view.alpha = 0.4;
    }

    /**
     * Take off select from tower
     */
    unselect() {
        this.view.alpha = 1;
    }

    /**
     * Check is tower in cell
     * @param {number} xCell
     * @param {number} yCell
     */
    isCell(xCell: number, yCell: number) {
        return xCell === this.position.cell.x && yCell === this.position.cell.y;
    }
}
