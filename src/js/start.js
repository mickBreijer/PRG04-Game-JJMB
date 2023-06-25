import {Actor, Vector} from 'excalibur';
import {Resources} from './resources.js';

export class Start extends Actor {
    constructor() {
        super({
            width: Resources.Start.width,
            height: Resources.Start.height
        });
        this.graphics.use(Resources.Start.toSprite());
        this.scale = new Vector(0.1, 0.1);
        this.pos = new Vector(980, 500);
    }
}