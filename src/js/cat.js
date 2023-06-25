import '../css/style.css'
import {Actor, Vector, CollisionType, Input} from "excalibur"
import {Resources} from './resources.js'
import {Dog} from './dog.js'
import {Hound} from './hound.js'

let sprite = 1;

export function setSprite(newSprite) {
    sprite = newSprite;
}

export class Cat extends Actor {

    game;

    constructor(posX, posY) {
        super({
            width: Resources.WCat.width,
            height: Resources.WCat.height
        });
        this.pos = new Vector(posX, posY);
        this.body.collisionType = CollisionType.Active;
        this.body.useGravity = true;
        this.scale = new Vector(0.8, 0.8);
    }

    onInitialize(engine) {
        this.game = engine
        this.graphics.use(Resources.WCat.toSprite())

        this.on('collisionstart', (event) => this.onCollisionStart(event));
        this.on('exitviewport', (event) => this.die(event))
    }

    die() {
        this.game.currentScene.resetGame();
        this.kill();
    }

    onPreUpdate(engine, delta) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Space) && this.vel.y === 0) {
            this.jump();
        }

        if (engine.input.keyboard.wasReleased(Input.Keys.Space)) {
            this.fall();
        }
    }

    onPostUpdate(engine, delta) {
        if (sprite === 1) {
            this.graphics.use(Resources.WCat.toSprite());
        }
        if (sprite === 2) {
            this.graphics.use(Resources.BCat.toSprite());
        }
    }

    jump() {
        this.vel = this.vel.add(new Vector(0, -800));

    }

    fall() {
        this.vel = this.vel.add(new Vector(0, 100));
    }

    onCollisionStart(event) {
        if (event.other instanceof Dog) {
            this.game.currentScene.decreaseLives()
            if (this.game.currentScene.lives <= 0) {
                this.kill();
                this.game.currentScene.resetGame();

            }
        }
        if (event.other instanceof Hound) {
            this.kill();
            this.game.currentScene.resetGame();
        }
    }
}