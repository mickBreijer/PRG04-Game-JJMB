import '../css/style.css'
import {Engine, Vector, Physics} from "excalibur"
import {ResourceLoader} from './resources.js'
import {Gamescene} from './gamescene'
import {Startscreen} from './startscreen.js'
import {GameOver} from './gameover.js'
import {Pause} from './pause.js'

export class Game extends Engine {

    constructor() {
        super({ width: 1920, height: 961 })
        this.start(ResourceLoader).then(() => this.startGame())
        ResourceLoader.suppressPlayButton = false
        this.showDebug(true)
        Physics.gravity = new Vector(0, 500)
    }

    startGame() {
        localStorage.setItem('scores', '[]');
        this.addScene('startscreen', new Startscreen());
        this.addScene('gamescene', new Gamescene());
        this.addScene('gameover', new GameOver());
        this.addScene('pause', new Pause());

        this.goToScene('startscreen')
    }
}

new Game()
