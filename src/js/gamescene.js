import '../css/style.css'
import {Color, Label, Physics, Scene, Vector, Input, Font, FontUnit} from 'excalibur';
import {Cat} from './cat.js';
import {GamesceneBackground} from './gamescene.background';
import {Terrain} from './terrain.js';
import {Terrain2} from './terrain2.js';
import {Dog} from "./dog.js";
import {Hound} from "./hound.js";
import {Missile} from "./missile.js";

export class Gamescene extends Scene {
    scoreLabel;
    livesLabel;
    lives;
    houndLives = 5;
    player;
    game;

    onInitialize(engine) {

        Physics.gravity = new Vector(0, 600);
        this.game = this.engine;

        const background = new GamesceneBackground();
        this.add(background);

        this.score = 0;
        this.scoreLabel = new Label({
            text: 'SCORE: ' + this.score,
            pos: new Vector(50, 80),
            color: Color.Red,
            font: new Font({
                family: 'Comic Sans MS',
                size: 50,
                unit: FontUnit.Px
            })
        });
        this.add(this.scoreLabel);

        const terrain = new Terrain();
        this.add(terrain);

        const terrain2 = new Terrain2();
        this.add(terrain2);

        this.player = new Cat(250, 800);
        this.add(this.player);

        this.lives = 3;
        this.livesLabel = new Label({
            text: 'LIVES: ' + this.lives,
            pos: new Vector(1300, 80),
            color: Color.Red,
            font: new Font({
                family: 'Comic Sans MS',
                size: 50,
                unit: FontUnit.Px
            })
        });
        this.add(this.livesLabel);

        const pause = new Label({
            text: 'Press P to PAUSE',
            pos: new Vector(650, 80),
            color: Color.Red,
            font: new Font({
                family: 'Comic Sans MS',
                size: 30,
                unit: FontUnit.Px
            })
        });
        this.add(pause);

        engine.input.keyboard.on('down', (evt) => {
            if (evt.key === 'ArrowLeft' || evt.key === '    a') {
                this.player.vel.x = -600;
            } else if (evt.key === 'ArrowRight' || evt.key === 'd') {
                this.player.vel.x = 300;
            }
        });

        engine.input.keyboard.on('up', (evt) => {
            if (evt.key === 'ArrowLeft' || evt.key === 'ArrowRight' || evt.key === 'a' || evt.key === 'd') {
                this.player.vel.x = 0;
            }
        });
    }

    onPostUpdate(engine, delta) {
        if (engine.input.keyboard.wasPressed(Input.Keys.KeyX)) {
            this.spawnMissile(this.player.pos.x, this.player.pos.y);
        }
        if (engine.input.keyboard.wasPressed(Input.Keys.KeyP)) {
            engine.goToScene('pause');
        }
    }

    generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    spawnEnemy() {
        const randomNumberOfDogs = this.generateRandomNumber(1, 5);

        for (let i = 0; i < randomNumberOfDogs; i++) {
            const dog = new Dog(this.generateRandomNumber(2000, 3000), 500);
            this.add(dog);
        }

        const hound = new Hound(this.generateRandomNumber(2500, 5000), 500);
        this.add(hound);
    }

    spawnMissile(posX, posY) {
        const missile = new Missile(posX, posY);
        this.add(missile);

        if (missile.pos.x > 1500) {
            missile.kill();
        }
        missile.on('collisionstart', (event) => {
            if (event.other instanceof Dog) {
                missile.kill();
                event.other.kill();
                this.score += 1000;
                this.updateScoreLabel();
            }
            if (event.other instanceof Hound) {
                this.houndLives--;
                if (this.houndLives <= 0) {
                    event.other.kill();
                    this.score += 5000;
                    this.updateScoreLabel();
                    this.houndLives = 5;
                }
            }
        });
    }

    decreaseLives() {
        this.lives--;
        this.updateLivesLabel();
    }

    updateScoreLabel() {
        this.score++;
        this.scoreLabel.text = 'SCORE: ' + this.score;
    }

    updateLivesLabel() {
        this.livesLabel.text = 'LIVES: ' + this.lives;
    }

    resetGame() {
        localStorage.setItem('scores', JSON.stringify(this.score));

        this.game.goToScene('gameover');
    }
}
