import {Tower, TowerOptions} from '../tower.ts';

export interface CircleTowerOptions extends TowerOptions {
    radius: number;
}

export class CircleTower extends Tower {

    radius: number;

    constructor(options: CircleTowerOptions) {
        super(options);
        this.radius = options.radius;

        // draw element
        const circle = new this.createjs.Shape();
        circle.graphics.beginFill('DeepSkyBlue').drawCircle(0, 0, this.radius);

        this.view.addChild(circle);
    }
}
