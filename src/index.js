import Phaser from 'phaser';

import beer1 from './assets/images/play/1.png';
import beer2 from './assets/images/play/2.png';
import beer3 from './assets/images/play/3.png';
import beer4 from './assets/images/play/4.png';
import beer5 from './assets/images/play/5.png';
import beer6 from './assets/images/play/6.png';
import beer7 from './assets/images/play/7.png';
import beer8 from './assets/images/play/8.png';
import beer9 from './assets/images/play/9.png';
import beer10 from './assets/images/play/10.png';
import beer11 from './assets/images/play/11.png';
import beer12 from './assets/images/play/12.png';
import beer13 from './assets/images/play/13.png';

import beer25_1 from './assets/images/25/1.png';
import beer25_2 from './assets/images/25/2.png';
import beer25_3 from './assets/images/25/3.png';
import beer25_4 from './assets/images/25/4.png';

import beer50_1 from './assets/images/50/1.png';
import beer50_2 from './assets/images/50/2.png';
import beer50_3 from './assets/images/50/3.png';
import beer50_4 from './assets/images/50/4.png';

import beer75_1 from './assets/images/75/1.png';
import beer75_2 from './assets/images/75/2.png';
import beer75_3 from './assets/images/75/3.png';
import beer75_4 from './assets/images/75/4.png';

import beer100_1 from './assets/images/100/1.png';
import beer100_2 from './assets/images/100/2.png';
import beer100_3 from './assets/images/100/3.png';
import beer100_4 from './assets/images/100/4.png';


import beerOver_1 from './assets/images/over/1.png';
import beerOver_2 from './assets/images/over/2.png';
import beerOver_3 from './assets/images/over/3.png';
import beerOver_4 from './assets/images/over/4.png';

class MyGame extends Phaser.Scene
{    
    constructor ()
    {
        super();
        this.beer = null;
    }


    preload ()
    {        
        this.load.image('beer1', beer1);
        this.load.image('beer2', beer2);
        this.load.image('beer3', beer3);
        this.load.image('beer4', beer4);
        this.load.image('beer5', beer5);
        this.load.image('beer6', beer6);
        this.load.image('beer7', beer7);
        this.load.image('beer8', beer8);
        this.load.image('beer9', beer9);
        this.load.image('beer10', beer10);
        this.load.image('beer11', beer11);
        this.load.image('beer12', beer12);
        this.load.image('beer13', beer13);

        this.load.image('beer25_1', beer25_1);
        this.load.image('beer25_2', beer25_2);
        this.load.image('beer25_3', beer25_3);
        this.load.image('beer25_4', beer25_4);

        this.load.image('beer50_1', beer50_1);
        this.load.image('beer50_2', beer50_2);
        this.load.image('beer50_3', beer50_3);
        this.load.image('beer50_4', beer50_4);

        this.load.image('beer75_1', beer75_1);
        this.load.image('beer75_2', beer75_2);
        this.load.image('beer75_3', beer75_3);
        this.load.image('beer75_4', beer75_4);

        this.load.image('beer100_1', beer100_1);
        this.load.image('beer100_2', beer100_2);
        this.load.image('beer100_3', beer100_3);
        this.load.image('beer100_4', beer100_4);

        this.load.image('beerOver_1', beerOver_1);
        this.load.image('beerOver_2', beerOver_2);
        this.load.image('beerOver_3', beerOver_3);
        this.load.image('beerOver_4', beerOver_4);
    }
      
    create ()
    {
        
        this.anims.create({
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
                { key: 'beer13', duration: 50 }
            ],
            frameRate: 8,
            repeat:0
        });        
        this.anims.create({
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
        this.anims.create({
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
        this.anims.create({
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
        this.anims.create({
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
        this.anims.create({
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

        var speed = 1;
        var isOverFlow = false;
        this.beer = this.add.sprite(400, 300, 'beer')
            .play('beerplay').stop();
        this.beer.setInteractive()
        .on('pointerdown', ()=>{
            console.log("down");
            this.beer.play('beerplay');
            this.beer.anims.timeScale = speed;
            isOverFlow = false;
                    
            console.log(this.beer.anims)
            console.log("beer");
            this.beer.play('beerplay');
        })
        .on('pointerup', ()=>{
            if(!isOverFlow){
                console.log("up");                
                const lvl = this.beer.anims.getProgress();
                this.beer.stop();
                console.log(lvl);
                this.beer.anims.timeScale = 1;
                if(lvl >= 0.75){
                    console.log('perfect');
                    this.beer.play("beer100");
                }else if(lvl >= 0.50){
                    console.log('75');
                    this.beer.play("beer75");
                }else if(lvl >= 0.25){
                    console.log('50');
                    this.beer.play("beer50");
                }else{
                    console.log('25');
                    this.beer.play("beer25");
                }                
                speed += 0.1;
            }
        });

        this.beer.on(Phaser.Animations.Events.ANIMATION_COMPLETE, function () {
            console.log("completed beer")
            isOverFlow = true;
            this.beer.anims.timeScale = 1;
            this.beer.play("beerOver"); 

        }, this);

        
    }
    
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: MyGame
};

const game = new Phaser.Game(config);
