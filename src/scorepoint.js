import atariPng from "./assets/fonts/atari-smooth-1.png";
import atariXml from './assets/fonts/atari-smooth.xml';

import Phaser from 'phaser';


export class ScorePoint {
    constructor(scene) {
        this.scene = scene;
        this.point = 0;
        this.targetPoint = 0;
    }

    preload(){
        
    }
    static loading(scene){
        scene.load.bitmapFont('atari-1', atariPng, atariXml);
        
    }

    create(){        
        this.scorePoint = this.scene.add.bitmapText(760, 170, 'atari-1', this.point, 38) // 760, 120
            .setOrigin(1);

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