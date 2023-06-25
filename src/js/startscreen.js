import '../css/style.css'
import {Color, Label, Scene, TextAlign, Vector, Font, FontUnit} from 'excalibur';
import {Background} from "./background.js";
import {Start} from "./start.js";

export class Startscreen extends Scene {

onInitialize(engine) {

    const background = new Background();
    this.add(background);

    const startText = new Label({
        text: 'Show those dogs who the better pet is!',
        pos: new Vector(620, 250),
        textAlign: TextAlign.Center,
        color: Color.Red,
        font: new Font({
            family: 'Comic Sans MS',
            size: 40,
            unit: FontUnit.Px
        })
    });
    this.add(startText);

    const startButton = new Start({
        width: 200,
        height: 50,
        anchor: new Vector(0.5, 0.5),
    });
    this.add(startButton);

    const instructions = new Label({
        text: 'Move - < >' +
            '\nJump - SPACEBAR' +
            '\nShoot - X',
        pos: new Vector(890, 320),
        textAlign: TextAlign.Center,
        color: Color.Red,
        font: new Font({
            family: 'Comic Sans MS',
            size: 24,
            unit: FontUnit.Px
        })
    });
    this.add(instructions)

    startButton.on('pointerup', () => {
        this.resetGame();
    });
}

resetGame() {
    this.engine.goToScene('gamescene');
}
}