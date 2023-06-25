import {Actor, Vector} from 'excalibur';
import {Resources} from './resources.js';

export class WCatSelect extends Actor {
    constructor() {
        super({
            width: Resources.WCat.width,
            height: Resources.WCat.height
        });
        this.pos = new Vector(800, 320);
        this.scale = new Vector(0.5, 0.5);

    }

    onInitialize(engine) {
        this.game = engine;
        this.graphics.use(Resources.WCat.toSprite());
    }
}