import beer1 from './assets/images/glasses/1/play/1.png';
import beer2 from './assets/images/glasses/1/play/2.png';
import beer3 from './assets/images/glasses/1/play/3.png';
import beer4 from './assets/images/glasses/1/play/4.png';
import beer5 from './assets/images/glasses/1/play/5.png';
import beer6 from './assets/images/glasses/1/play/6.png';
import beer7 from './assets/images/glasses/1/play/7.png';
import beer8 from './assets/images/glasses/1/play/8.png';
import beer9 from './assets/images/glasses/1/play/9.png';
import beer10 from './assets/images/glasses/1/play/10.png';
import beer11 from './assets/images/glasses/1/play/11.png';
import beer12 from './assets/images/glasses/1/play/12.png';
import beer13 from './assets/images/glasses/1/play/13.png';

import beer25_1 from './assets/images/glasses/1/25/1.png';
import beer25_2 from './assets/images/glasses/1/25/2.png';
import beer25_3 from './assets/images/glasses/1/25/3.png';
import beer25_4 from './assets/images/glasses/1/25/4.png';

import beer50_1 from './assets/images/glasses/1/50/1.png';
import beer50_2 from './assets/images/glasses/1/50/2.png';
import beer50_3 from './assets/images/glasses/1/50/3.png';
import beer50_4 from './assets/images/glasses/1/50/4.png';

import beer75_1 from './assets/images/glasses/1/75/1.png';
import beer75_2 from './assets/images/glasses/1/75/2.png';
import beer75_3 from './assets/images/glasses/1/75/3.png';
import beer75_4 from './assets/images/glasses/1/75/4.png';

import beer100_1 from './assets/images/glasses/1/100/1.png';
import beer100_2 from './assets/images/glasses/1/100/2.png';
import beer100_3 from './assets/images/glasses/1/100/3.png';
import beer100_4 from './assets/images/glasses/1/100/4.png';


import beerOver_1 from './assets/images/glasses/1/over/1.png';
import beerOver_2 from './assets/images/glasses/1/over/2.png';
import beerOver_3 from './assets/images/glasses/1/over/3.png';
import beerOver_4 from './assets/images/glasses/1/over/4.png';

import sndPourMp3 from "./assets/sounds/pour.mp3";
import sndPourOgg from "./assets/sounds/pour.ogg";

export class Beer {
    constructor(scene){
        this.scene = scene;
        this.mapEvent = new Map();
        this.availablePour = false;
    }
    preload(){
        this.scene.load.image('beer1', beer1);
        this.scene.load.image('beer2', beer2);
        this.scene.load.image('beer3', beer3);
        this.scene.load.image('beer4', beer4);
        this.scene.load.image('beer5', beer5);
        this.scene.load.image('beer6', beer6);
        this.scene.load.image('beer7', beer7);
        this.scene.load.image('beer8', beer8);
        this.scene.load.image('beer9', beer9);
        this.scene.load.image('beer10', beer10);
        this.scene.load.image('beer11', beer11);
        this.scene.load.image('beer12', beer12);
        this.scene.load.image('beer13', beer13);

        this.scene.load.image('beer25_1', beer25_1);
        this.scene.load.image('beer25_2', beer25_2);
        this.scene.load.image('beer25_3', beer25_3);
        this.scene.load.image('beer25_4', beer25_4);

        this.scene.load.image('beer50_1', beer50_1);
        this.scene.load.image('beer50_2', beer50_2);
        this.scene.load.image('beer50_3', beer50_3);
        this.scene.load.image('beer50_4', beer50_4);

        this.scene.load.image('beer75_1', beer75_1);
        this.scene.load.image('beer75_2', beer75_2);
        this.scene.load.image('beer75_3', beer75_3);
        this.scene.load.image('beer75_4', beer75_4);

        this.scene.load.image('beer100_1', beer100_1);
        this.scene.load.image('beer100_2', beer100_2);
        this.scene.load.image('beer100_3', beer100_3);
        this.scene.load.image('beer100_4', beer100_4);

        this.scene.load.image('beerOver_1', beerOver_1);
        this.scene.load.image('beerOver_2', beerOver_2);
        this.scene.load.image('beerOver_3', beerOver_3);
        this.scene.load.image('beerOver_4', beerOver_4);

        this.scene.load.audio('pour', [sndPourMp3, sndPourOgg]);
    }

    create(){
        this.sndPour = this.scene.sound.add('pour');

        this.scene.anims.create({
            key: 'beerplay',
            frames: [
                { key: 'beer1' },
                { key: 'beer2' },
                { key: 'beer3' },
                { key: 'beer4' },
                { key: 'beer5' },
                { key: 'beer6' },
                { key: 'beer7' },
                { key: 'beer8' },
                { key: 'beer9' },
                { key: 'beer10' },
                { key: 'beer11' },
                { key: 'beer12' },
                { key: 'beer13' }
            ],
            frameRate: 8,
            repeat:0
        });        
        this.scene.anims.create({
            key: 'beer25',
            frames: [
                { key: 'beer25_1' },
                { key: 'beer25_2' },
                { key: 'beer25_3' },
                { key: 'beer25_4' },
            ],
            frameRate: 8,
            repeat:-1
        });
        this.scene.anims.create({
            key: 'beer50',
            frames: [
                { key: 'beer50_1' },
                { key: 'beer50_2' },
                { key: 'beer50_3' },
                { key: 'beer50_4' },                
            ],
            frameRate: 8,
            repeat:-1
        });
        this.scene.anims.create({
            key: 'beer75',
            frames: [
                { key: 'beer75_1' },
                { key: 'beer75_2' },
                { key: 'beer75_3' },
                { key: 'beer75_4' },
            ],
            frameRate: 8,
            repeat:-1
        });
        this.scene.anims.create({
            key: 'beer100',
            frames: [
                { key: 'beer100_1' },
                { key: 'beer100_2' },
                { key: 'beer100_3' },
                { key: 'beer100_4' },
            ],
            frameRate: 8,
            repeat:-1
        });
        this.scene.anims.create({
            key: 'beerOver',
            frames: [
                { key: 'beerOver_1' },
                { key: 'beerOver_2' },
                { key: 'beerOver_3' },
                { key: 'beerOver_4' },
            ],
            frameRate: 8,
            repeat:-1
        });

        var speed = 2;
        var isOverFlow = false;

        this.beer = this.scene.add.sprite(this.scene.game.config.width / 2, 1000, 'beer')
            .play('beerplay').stop();

        this.beer.setInteractive()
        .on('pointerdown', ()=>{
            if (this.availablePour === false){
                return;
            }
            
            this.beer.play('beerplay');
            this.beer.anims.timeScale = speed;
            isOverFlow = false;
                    
            // console.log(this.beer.anims)
            // console.log("beer");
            this.beer.play('beerplay');
            this.sndPour.play();
            
        })
        .on('pointerup', ()=>{
            if (this.availablePour === false){
                return;
            }
            if(!isOverFlow){
                console.log("up");                
                const lvl = this.beer.anims.getProgress();
                this.beer.stop();
                console.log(lvl);
                this.beer.anims.timeScale = 1;
                             
                
                if(lvl >= 0.75){
                    console.log('perfect');
                    this.beer.play("beer100");
                    this.mapEvent.get(BEER_COMPLETED_100)();
                    
                }else if(lvl >= 0.50){                    
                    this.beer.play("beer75");
                    this.mapEvent.get(BEER_COMPLETED_75)();
                }else if(lvl >= 0.25){                    
                    this.beer.play("beer50");
                    this.mapEvent.get(BEER_COMPLETED_50)();
                }else{
                    this.beer.play("beer25");
                    this.mapEvent.get(BEER_COMPLETED_25)();
                }                
                speed += 0.1;
            }
            
        });
        let beer = this.beer;
        let t = this;
        this.beer.on(Phaser.Animations.Events.ANIMATION_COMPLETE, function () {
            isOverFlow = true;
            beer.anims.timeScale = 1;
            beer.play("beerOver"); 
            t.mapEvent.get(BEER_COMPLETED_OVER)();

        }, this.scene);
    }

    hide() {
        this.beer.visible = false;
    }
    show() {
        this.beer.visible = true;
    }
    addEvent(eventName, callback){
        this.mapEvent.set(eventName, callback);        
    }

}
const BEER_COMPLETED_100 = "100";
const BEER_COMPLETED_75 = "75";
const BEER_COMPLETED_50 = "50";
const BEER_COMPLETED_25 = "25";
const BEER_COMPLETED_0 = "0";
const BEER_COMPLETED_OVER = "OVER";

Beer.BEER_COMPLETED_100 = BEER_COMPLETED_100;
Beer.BEER_COMPLETED_75 = BEER_COMPLETED_75;
Beer.BEER_COMPLETED_50 = BEER_COMPLETED_50;
Beer.BEER_COMPLETED_25 = BEER_COMPLETED_25;
Beer.BEER_COMPLETED_0 = BEER_COMPLETED_0;
Beer.BEER_COMPLETED_OVER = BEER_COMPLETED_OVER;
