import {Actor, Vector} from 'excalibur';
import {Resources} from './resources.js';

export class BCatSelect extends Actor {
    constructor() {
        super({
            width: Resources.BCat.width,
            height: Resources.BCat.height
        });
        this.pos = new Vector(1150, 320);
        this.scale = new Vector(0.5, 0.5);

    }

    onInitialize(engine) {
        this.game = engine;
        this.graphics.use(Resources.BCat.toSprite());
    }
}