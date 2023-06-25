import {Actor, CollisionType, Vector} from "excalibur";
import {Resources} from "./resources.js";

export class Terrain2 extends Actor {
    constructor() {
        super({
            width: Resources.Terrain.width,
            height: Resources.Terrain.height,
            pos: new Vector(2500, 960)
        })
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Terrain.toSprite())
        this.body.collisionType = CollisionType.Fixed
        this.body.useGravity = false
        this.vel = new Vector(-500, 0)
        this.scale = new Vector(2, 5)
    }

    onPreUpdate(engine, delta) {
        if (this.pos.x < -780) {
            this.pos = new Vector(3200, Math.random() * 300 + 560)
        }
    }
}