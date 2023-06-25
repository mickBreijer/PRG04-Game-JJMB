import {Actor, Vector} from "excalibur";
import {Resources} from "./resources.js";
import {Enemy} from './enemy.js';

export class Missile extends Actor {
    constructor(posX, posY) {
        super({
            width: Resources.Missile.width,
            height: Resources.Missile.height
        })
        this.pos = new Vector(posX + 100, posY);
        this.scale = new Vector(0.5, 0.5)
        this.vel = new Vector(1000, 0);
        this.on('collisionstart', (event) => this.hitSomething(event));
    }

    onInitialize(engine) {
        super.onInitialize(engine)
        this.graphics.use(Resources.Missile.toSprite())
    }

    hitSomething(event) {
        if (event.other instanceof Enemy) {
            this.kill();
        }
    }
}