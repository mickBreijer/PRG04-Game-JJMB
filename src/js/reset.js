import {Actor, Vector} from 'excalibur';
import {Resources} from './resources.js';

export class Reset extends Actor {
    constructor() {
        super({
            width: Resources.Reset.width,
            height: Resources.Reset.height
        });
        this.graphics.use(Resources.Reset.toSprite());
        this.scale = new Vector(0.1, 0.1);
        this.pos = new Vector(950, 410);
    }
}