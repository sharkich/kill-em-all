import {Component} from 'angular2/core';
const createjs = window['createjs'];

console.log('`createjsTest` component loaded asynchronously');

@Component({
    selector: 'game',
    styles: [ require('./createjs-test.css') ],
    template: require('./createjs-test.html')
})
export class CreatejsTest {
    stage: any;
    soundID: any = '/assets/sounds/1.wav';

    constructor() {
    }

    ngOnInit() {
        console.log('hello `CreatejsTest` component');

        this.stage = new createjs.Stage('demoCanvas');

        /**
         * view
         */
        const circle = new createjs.Shape();
        circle.graphics.beginFill('DeepSkyBlue').drawCircle(0, 0, 50);
        circle.x = 100;
        circle.y = 100;
        
        this.stage.addChild(circle);
        // stage.update();

        /**
         * animation
         */
        createjs.Tween.get(circle, { loop: true })
            .to({ x: 400 }, 1000, createjs.Ease.getPowInOut(4))
            .to({ alpha: 0, y: 175 }, 500, createjs.Ease.getPowInOut(2))
            .to({ alpha: 0, y: 225 }, 100)
            .to({ alpha: 1, y: 200 }, 500, createjs.Ease.getPowInOut(2))
            .to({ x: 100 }, 800, createjs.Ease.getPowInOut(2));
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener('tick', this.stage);

        /**
         * sound
         */
        createjs.Sound.registerSound(this.soundID, this.soundID);

    }

    playSound() {
        createjs.Sound.play(this.soundID);
    }

    loadImage() {
        const preload = new createjs.LoadQueue();
        preload.addEventListener('fileload', (event) => {
            document.body.appendChild(event.result);
        });
        preload.loadFile('/assets/img/angularclass-logo.png');
    }
}
