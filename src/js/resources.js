import {ImageSource, Loader} from 'excalibur'
import wCatImage from '../images/wcat.png'
import bCatImage from '../images/bcat.png'
import backgroundImage from '../images/background.jpg'
import terrainImage from '../images/terrain.jpg'
import startImage from '../images/start.png'
import dogImage from '../images/dog.png'
import houndImage from '../images/hound.png'
import resetImage from '../images/reset.png'
import background2Image from '../images/background.jpg'
import missileImage from '../images/missile.png'

const Resources = {
    WCat: new ImageSource(wCatImage),
    BCat: new ImageSource(bCatImage),
    Background: new ImageSource(backgroundImage),
    Terrain: new ImageSource(terrainImage),
    Start: new ImageSource(startImage),
    Dog: new ImageSource(dogImage),
    Hound: new ImageSource(houndImage),
    Reset: new ImageSource(resetImage),
    Background2: new ImageSource(background2Image),
    Missile: new ImageSource(missileImage),
}

const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}

const ResourceLoader = new Loader(resourceArray)

export { Resources, ResourceLoader }