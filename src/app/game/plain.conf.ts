export const MAX_CANVAS_WIDTH: number = 1024;
export const MAX_CANVAS_HEIGHT: number = 768;

export const MAX_WIDTH: number = Math.round(MAX_CANVAS_WIDTH * 1);
export const MAX_HEIGHT: number = Math.round(MAX_CANVAS_HEIGHT * 1);

export const TILE_SIZE: number = 64;
export const TILE_HALF_SIZE: number = Math.round(TILE_SIZE / 2);

export const TILES_NUM_X: number = Math.round(MAX_WIDTH / TILE_SIZE);
export const TILES_NUM_Y: number = Math.round(MAX_HEIGHT / TILE_SIZE);