
import pg_background from './assets/images/progressbar/background.png';
import pg_mask from './assets/images/progressbar/mask.png';
import pg_progress from './assets/images/progressbar/progress.png';

import timer from './assets/images/objects/timer.png';

export class ProgressBar {
    constructor (scene, reduceSpeed = 0.5){
        this.reduceSpeed = reduceSpeed;
        this.scene = scene;
        
    }
    create(){
        this.pgBackground = this.scene.make.image({
            x: this.scene.game.config.width / 2,
            y: 100,
            key: 'pg_background',
            add: true
        });
        this.mask = this.scene.make.image({
            x: this.scene.game.config.width / 2,
            y: 100,
            key: 'pg_mask',
            add: false
        });
        var newX = this.scene.game.config.width / 2;
        this.pgProgress = this.scene.make.image({
            x: newX,
            y: 100,
            key: 'pg_progress',
            add: true
        });
        this.pgProgress.mask = new Phaser.Display.Masks.BitmapMask(this.scene, this.mask);       

        this.timer = this.scene.make.image({
            x: (this.scene.game.config.width / 2) - 261 -35,
            y: 100,
            key: 'timer',
            add: true
        });

    }
    update(){
        if( this.gameover === true){
            console.log("game over");
            return;
        }
        if(this.pgProgress.x + (this.pgBackground.width/2) > this.pgBackground.width/2){
            this.pgProgress.x -= this.reduceSpeed;
        }else{
            
            this.gameover = true;
            this.cb();
            
        }
        
    }
    preload(){
        this.scene.load.image('pg_background', pg_background);
        this.scene.load.image('pg_mask', pg_mask);
        this.scene.load.image('pg_progress', pg_progress);
        this.scene.load.image('timer', timer);
    }

    addProgress(percentX){
        if( this.gameover !== true){
            this.pgProgress.x += this.pgProgress.width/100 * percentX;
        }        
    }
    addGameoverFunc(cb){
        this.cb = cb;
    }
        
}