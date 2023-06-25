import '../css/style.css';
import {Color, Font, FontUnit, Label, Scene, Vector} from 'excalibur';
import {Start} from './start.js';
import {Background} from './background.js';
import {setSprite} from './cat.js';
import {BCatSelect} from './bCatSelect.js';
import {WCatSelect} from './wCatSelect.js';

export class Pause extends Scene {
    game;


    onInitialize(engine) {
        this.game = engine;

        const background = new Background();
        this.add(background);

        const headerLabel = new Label({
            text: 'Paused',
            pos: new Vector(870, 100),
            color: Color.Red,
            font: new Font({
                family: 'Comic Sans MS',
                size: 50,
                unit: FontUnit.Px
            })
        });
        this.add(headerLabel);

        const pickSpriteLabel = new Label({
            text: 'Change your character',
            pos: new Vector(800, 200),
            color: Color.Red,
            font: new Font({
                family: 'Comic Sans MS',
                size: 30,
                unit: FontUnit.Px
            })
        });
        this.add(pickSpriteLabel);

        const toggleWhiteCatSpriteButton = new WCatSelect({
            pos: new Vector(500, 320),
            width: 200,
            height: 50,
        });
        this.add(toggleWhiteCatSpriteButton);

        toggleWhiteCatSpriteButton.on('pointerup', () => {
            setSprite(1);
        });

        const toggleBlackCatSpriteButton = new BCatSelect({
            pos: new Vector(1000, 320),
            width: 200,
            height: 50,
        });
        this.add(toggleBlackCatSpriteButton);

        toggleBlackCatSpriteButton.on('pointerup', () => {
            setSprite(2);
        });

        const backButton = new Start({
            text: 'Back',
            pos: new Vector(600, 400),
            width: 200,
            height: 50
        });
        this.add(backButton);

        backButton.on('pointerup', () => {
            engine.goToScene('gamescene');
        });
    }

}