import {Vector} from "excalibur";
import {Resources} from "./resources.js";
import {Enemy} from './enemy.js';

export class Dog extends Enemy {
    constructor(posX, posY) {
        super({
        })
        this.pos = new Vector(posX, posY);
        this.scale = new Vector(0.7, 0.7);
        this.anchor.setTo(0.5,-0.5)
    }

    onInitialize(engine) {
        super.onInitialize(engine)
        this.graphics.use(Resources.Dog.toSprite())
    }


}