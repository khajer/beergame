import atariPng from "./assets/fonts/atari-smooth-1.png";
import atariXml from './assets/fonts/atari-smooth.xml';

const FONT_Y = 65;
const FONT_SIZE = 16;
export class ScorePoint {
    constructor(scene) {
        this.scene = scene;
    }

    preload(){}

    static loading(scene){
        scene.load.bitmapFont('atari-1', atariPng, atariXml);    
    }

    create(){        
        const FONT_POS_X = (this.scene.game.config.width / 2) + 88;
        this.scorePoint = this.scene.add.bitmapText(FONT_POS_X, FONT_Y, 'atari-1', this.point, FONT_SIZE) // 760, 120
            .setOrigin(1);
        this.reset();

    }
    
    update(){
        if (this.point === this.targetPoint ) return;

        if(this.point < this.targetPoint){
            this.point += 5;
        }else{
            this.point -= 5;
        }
        this.scorePoint.setText(this.point);
    }
    addPoint(point){
        this.targetPoint += point;
    }
    reset(){
        this.point = 0;
        this.targetPoint = 0;
        this.scorePoint.setText(this.point);

    }

}