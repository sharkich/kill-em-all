import {
    MAX_WIDTH,
    MAX_HEIGHT,
    TILE_SIZE,
    TILE_HALF_SIZE
} from '../plain.conf';

export class Map {
    /**
     * converte x to xCell
     * @param {number} x
     * @returns {number}
     */
    static cellNum(x: number) {
        return Math.floor(x / TILE_SIZE);
    }
}