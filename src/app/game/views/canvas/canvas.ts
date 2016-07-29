import {CreateJS} from '../createjs.d.ts';

import {Tower} from '../../towers/tower';

import {
    MAX_WIDTH,
    MAX_HEIGHT,
    TILE_SIZE,
    TILE_HALF_SIZE,
    TILES_NUM_X,
    TILES_NUM_Y
} from '../../plain.conf';

export class CanvasView {

    /**
     * createjs.Stage
     */
    stage: any;

    /**
     * createjs.Container
     */
    bgLayer: any;
    towersLayer: any;
    gridLayer: any;
    gridInfoLayer: any;

    /**
     * createjs
     */
    createjs: CreateJS;

    constructor(createjs: CreateJS) {
        this.createjs = createjs;

        this.stage = new createjs.Stage('game-canvas');
        this.stage.enableMouseOver();

        this.bgLayer = new createjs.Container();
        this.initBackground(this.bgLayer);
        this.stage.addChild(this.bgLayer);

        this.gridLayer = new createjs.Container();
        this.initGrid(this.gridLayer);
        this.stage.addChild(this.gridLayer);

        this.towersLayer = new createjs.Container();
        this.stage.addChild(this.towersLayer);

        this.gridInfoLayer = new createjs.Container();
        this.initGridInfo(this.gridInfoLayer);
        this.stage.addChild(this.gridInfoLayer);
    }

    render() {
        this.stage.update();
    }

    addTower(tower: Tower) {
        if (!tower.view) {
            throw new Error('O_o.CanvasView.addTower: `tower.view` is empty');
        }
        this.towersLayer.addChild(tower.view);
    }

    /**
     * Draw line
     * @param x0
     * @param y0
     * @param x1
     * @param y1
     * @param width
     * @param color
     * @returns {any}
     */
    line (x0: number, y0: number, x1: number, y1: number, width: number, color: string) {
        const line = new this.createjs.Shape();
        line.graphics.setStrokeStyle(width);
        line.graphics.beginStroke(color);
        line.graphics.moveTo(x0, y0);
        line.graphics.lineTo(x1, y1);
        line.graphics.endStroke();
        return line;
    }

    /**
     * Tiles
     * @param layer
     */
    initGrid(layer) {
        const LINE_COLOR = '#eee';
        const LINE_WIDTH = 1;

        // Rectangles
        for (let x = 0; x < TILES_NUM_X; x++) {
            for (let y = 0; y < TILES_NUM_Y; y++) {
                const rect = new this.createjs.Shape();
                rect.graphics.beginStroke(LINE_COLOR);
                rect.graphics.beginFill('rgba(0,0,0,0.2)');
                rect.graphics.setStrokeStyle(LINE_WIDTH);
                rect.graphics.drawRect(TILE_SIZE * x, TILE_SIZE * y, TILE_SIZE, TILE_SIZE);
                rect.on('mouseover', () => {
                    rect.alpha *= 0.8;
                    this.render();
                });
                rect.on('mouseout', () => {
                    rect.alpha = 1;
                    this.render();
                });
                layer.addChild(rect);
            }
        }

    }

    /**
     * Background images with natural elements
     * @param layer
     */
    initBackground (layer) {
    }

    /**
     * Info text about grid: Tiles count and pixels
     * @param layer
     */
    initGridInfo(layer) {
        const PIXELS_TEXT_STYLE = '10px Arial';
        const PIXELS_TEXT_COLOR = '#666';
        const TILES_TEXT_STYLE = 'bold 12px Arial';
        const TILES_TEXT_COLOR = '#000';

        // text: vertical lines
        let x = TILE_SIZE;
        while (x < MAX_WIDTH) {
            // layer.addChild(this.line(x, 0, x, MAX_HEIGHT, LINE_WIDTH, LINE_COLOR));
            const label = new this.createjs.Text(x, PIXELS_TEXT_STYLE, PIXELS_TEXT_COLOR);
            label.textAlign = 'center';
            label.x = x;
            label.y = 2;
            layer.addChild(label);

            x += TILE_SIZE;
        }

        // text: horizontal lines
        let y = TILE_SIZE;
        while (y < MAX_HEIGHT) {
            // layer.addChild(this.line(0, y, MAX_WIDTH, y, LINE_WIDTH, LINE_COLOR));
            const label = new this.createjs.Text(y, PIXELS_TEXT_STYLE, PIXELS_TEXT_COLOR);
            label.x = 2;
            label.y = y - 6;
            layer.addChild(label);

            y += TILE_SIZE;
        }

        // text: 0,0
        const labelZiro = new this.createjs.Text('0,0', PIXELS_TEXT_STYLE, PIXELS_TEXT_COLOR);
        labelZiro.x = 2;
        labelZiro.y = 2;
        layer.addChild(labelZiro);

        // text: 1024,768
        const labelMax = new this.createjs.Text(
            `${MAX_WIDTH},${MAX_HEIGHT}`,
            PIXELS_TEXT_STYLE,
            PIXELS_TEXT_COLOR
        );
        labelMax.textAlign = 'right';
        labelMax.x = MAX_WIDTH - 1;
        labelMax.y = MAX_HEIGHT - 11;
        layer.addChild(labelMax);

        // text: tiles x counts
        for (let i = 0; i < TILES_NUM_X; i++) {
            const label = new this.createjs.Text(i, TILES_TEXT_STYLE, TILES_TEXT_COLOR);
            label.textAlign = 'center';
            label.x = TILE_SIZE * i + TILE_HALF_SIZE;
            label.y = 2;
            layer.addChild(label);
        }

        // text: tiles y counts
        for (let i = 0; i < TILES_NUM_Y; i++) {
            const label = new this.createjs.Text(i, TILES_TEXT_STYLE, TILES_TEXT_COLOR);
            label.x = 2;
            label.y = TILE_SIZE * i + TILE_HALF_SIZE - 6;
            layer.addChild(label);
        }
    }
}
