import '../css/style.css';
import {Color, Font, FontUnit, Label, Scene, TextAlign, Vector} from 'excalibur';
import {Background} from './background.js';
import {Reset} from './reset.js';
export class GameOver extends Scene {

    onInitialize(engine) {
        const storedScores = JSON.parse(localStorage.getItem('scores'));

        const background = new Background();
        this.add(background);

        const gameOverText = new Label({
            text: 'Those filthy dogs won this time, click below to try again!',
            pos: new Vector(440, 250),
            textAlign: TextAlign.Center,
            color: Color.Red,
            font: new Font({
                family: 'Comic Sans MS',
                size: 40,
                unit: FontUnit.Px
            })
        });
        this.add(gameOverText);

        const lastScoreLabel = new Label({
            text: 'SCORE: ' + storedScores,
            pos: new Vector(880, 320),
            color: Color.Red,
            font: new Font({
                family: 'Comic Sans MS',
                size: 30,
                unit: FontUnit.Px
            }),
            textAlign: TextAlign.Center
        });
        this.add(lastScoreLabel);

        const backButton = new Reset({
            width: 200,
            height: 50,
            anchor: new Vector(0.5, 0.5),
        });
        this.add(backButton);

        backButton.on('pointerup', () => {
            location.reload();
        });
    }
}