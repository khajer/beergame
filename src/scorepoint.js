
import atariPng from "./assets/fonts/atari-smooth-1.png";
import atariXml from './assets/fonts/atari-smooth.xml';

export class ScorePoint {
    constructor(scene) {
        this.scene = scene;
        this.point = 0;
        this.targetPoint = 0;
    }

    preload(){
        this.scene.load.bitmapFont('atari-1', atariPng, atariXml);
    }

    create(){        
        this.scorePoint = this.scene.add.bitmapText(100, 100, 'atari-1', this.point)
            .setOrigin(0.5);
    }
    
    update(){
        if(this.point === this.targetPoint){
            return;
        }

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

}