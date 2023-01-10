
import pg_background from './assets/images/progressbar/background.png';
import pg_mask from './assets/images/progressbar/mask.png';
import pg_progress from './assets/images/progressbar/progress.png';

import timer from './assets/images/objects/timer.png';

const PROGRESS_Y = 40;
const REDUCE_SPEED = 0.4;

export class ProgressBar {
    constructor (scene, reduceSpeed = REDUCE_SPEED){
        this.reduceSpeed = reduceSpeed;
        this.scene = scene;        
    }

    reset(){
        this.gameover = false;
        this.pgProgress.x = this.scene.game.config.width / 2;
    }
    create(){
        this.pgBackground = this.scene.make.image({
            x: this.scene.game.config.width / 2,
            y: PROGRESS_Y,
            key: 'pg_background',
            // add: true
        });
        this.mask = this.scene.make.image({
            x: this.scene.game.config.width / 2,
            y: PROGRESS_Y,
            key: 'pg_mask',
            add: false
        });
        var newX = this.scene.game.config.width / 2;
        this.pgProgress = this.scene.make.image({
            x: newX,
            y: PROGRESS_Y,
            key: 'pg_progress',
            add: true
        });
        this.pgProgress.mask = new Phaser.Display.Masks.BitmapMask(this.scene, this.mask);       

        this.timer = this.scene.make.image({
            x: (this.scene.game.config.width / 2) - (this.pgBackground.width/2),
            y: PROGRESS_Y,
            key: 'timer',
            add: true
        });

    }
    update(){
        if ( this.gameover === true  || this.pgProgress === undefined){
            return;
        }
        let difSpace = (this.pgProgress.x + this.pgBackground.width)  - this.pgBackground.x;        
        if (difSpace > 0){
            this.pgProgress.x -= this.reduceSpeed;
        }else{            
            this.gameover = true;
            this.cb();
        }
    }
    preload(){        
    }
    static loading(scene){
        scene.load.image('pg_background', pg_background);
        scene.load.image('pg_mask', pg_mask);
        scene.load.image('pg_progress', pg_progress);
        scene.load.image('timer', timer);
        
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