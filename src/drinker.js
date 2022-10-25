import ch_waiting_1 from './assets/images/characters/1/waiting/1.png';
import ch_waiting_2 from './assets/images/characters/1/waiting/2.png';
import ch_waiting_3 from './assets/images/characters/1/waiting/3.png';
import ch_waiting_4 from './assets/images/characters/1/waiting/4.png';

import ch_in_1 from './assets/images/characters/1/in/1.png';
import ch_in_2 from './assets/images/characters/1/in/2.png';
import ch_in_3 from './assets/images/characters/1/in/3.png';
import ch_in_4 from './assets/images/characters/1/in/4.png';

import ch_drink_1 from './assets/images/characters/1/receive/1.png';
import ch_drink_2 from './assets/images/characters/1/receive/2.png';
import ch_drink_3 from './assets/images/characters/1/receive/3.png';
import ch_drink_4 from './assets/images/characters/1/receive/4.png';


import ch_resp_100_1 from './assets/images/characters/1/response/100/1.png';
import ch_resp_100_2 from './assets/images/characters/1/response/100/2.png';

import ch_resp_75_1 from './assets/images/characters/1/response/75/1.png';
import ch_resp_75_2 from './assets/images/characters/1/response/75/2.png';

import ch_resp_50_1 from './assets/images/characters/1/response/50/1.png';
import ch_resp_50_2 from './assets/images/characters/1/response/50/2.png';

import ch_resp_25_1 from './assets/images/characters/1/response/25/1.png';
import ch_resp_25_2 from './assets/images/characters/1/response/25/2.png';


export class Drinker{
    constructor(scene){
        this.scene = scene;
        this.mapEvent = new Map();
        this.mapAnimation = [];
        this.percentDrink = 0;
        this.drinkerType = 0;
        
        this.cntDrink = 0;
        this.totalDrink = 2;
    }

    preload(){
        this.scene.load.image('ch_waiting_1', ch_waiting_1);
        this.scene.load.image('ch_waiting_2', ch_waiting_2);
        this.scene.load.image('ch_waiting_3', ch_waiting_3);
        this.scene.load.image('ch_waiting_4', ch_waiting_4);
        this.scene.load.image('ch_in_1', ch_in_1);
        this.scene.load.image('ch_in_2', ch_in_2);
        this.scene.load.image('ch_in_3', ch_in_3);
        this.scene.load.image('ch_in_4', ch_in_4);
        this.scene.load.image('ch_drink_1', ch_drink_1);
        this.scene.load.image('ch_drink_2', ch_drink_2);
        this.scene.load.image('ch_drink_3', ch_drink_3);
        this.scene.load.image('ch_drink_4', ch_drink_4);
        this.scene.load.image('ch_resp_100_1', ch_resp_100_1);
        this.scene.load.image('ch_resp_100_2', ch_resp_100_2);
        this.scene.load.image('ch_resp_75_1', ch_resp_75_1);
        this.scene.load.image('ch_resp_75_2', ch_resp_75_2);       
        this.scene.load.image('ch_resp_50_1', ch_resp_50_1);
        this.scene.load.image('ch_resp_50_2', ch_resp_50_2);        
        this.scene.load.image('ch_resp_25_1', ch_resp_25_1);
        this.scene.load.image('ch_resp_25_2', ch_resp_25_2);

        this.setupMapCharacterEvent();
    }
    setupMapCharacterEvent(){
        let aniSet1 = new Map();
        aniSet1.set("in", "in");
        aniSet1.set("resp100", "resp100");
        aniSet1.set("resp75", "resp75");
        aniSet1.set("resp50", "resp50");
        aniSet1.set("resp25", "resp25");
        aniSet1.set("waiting", "waiting");
        aniSet1.set("out", "out");
        aniSet1.set("drink", "drink");
        this.mapAnimation[0] = aniSet1;
    }
    getDrinkerType(stateName){        
        return this.mapAnimation[this.drinkerType].get(stateName);        
    }

    setDrinkerComeIn(drinkerType){
        this.drinkerType = drinkerType;
        this.drinker.play(this.getDrinkerType("in"));
    }
    create(){        
        this.scene.anims.create({
            key: 'resp100',
            frames: [
                { key: 'ch_resp_100_1' },
                { key: 'ch_resp_100_2' },
            ],
            frameRate: 8,
            repeat: 0
        });
        this.scene.anims.create({
            key: 'resp75',
            frames: [
                { key: 'ch_resp_75_1' },
                { key: 'ch_resp_75_2' },
            ],
            frameRate: 8,
            repeat: 0
        });
        this.scene.anims.create({
            key: 'resp50',
            frames: [
                { key: 'ch_resp_50_1' },
                { key: 'ch_resp_50_2' },
            ],
            frameRate: 8,
            repeat: 0
        });
        this.scene.anims.create({
            key: 'resp25',
            frames: [
                { key: 'ch_resp_25_1' },
                { key: 'ch_resp_25_2' },
            ],
            frameRate: 8,
            repeat: 0
        });
        
        this.scene.anims.create({
            key: 'in',
            frames: [
                { key: 'ch_in_1' },
                { key: 'ch_in_2' },
                { key: 'ch_in_3' },
                { key: 'ch_in_4' },
            ],
            frameRate: 8,
            repeat:0
        });

        this.scene.anims.create({
            key: 'waiting',
            frames: [
                { key: 'ch_waiting_1' },
                { key: 'ch_waiting_2' },
                { key: 'ch_waiting_3' },
                { key: 'ch_waiting_4' },
            ],
            frameRate: 8,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'out',
            frames: [
                { key: 'ch_waiting_1' },
                { key: 'ch_waiting_2' },
                { key: 'ch_waiting_3' },
                { key: 'ch_waiting_4' },
            ],
            frameRate: 8,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'drink',
            frames: [
                { key: 'ch_drink_1' },
                { key: 'ch_drink_2' },
                { key: 'ch_drink_3' },
                { key: 'ch_drink_4' },
            ],
            frameRate: 8,
            repeat: 0
        });
        this.drinker = this.scene.add.sprite(this.scene.game.config.width / 2, 1000, this.getDrinkerType('waiting'));

        let dk = this;
        this.drinker.on(Phaser.Animations.Events.ANIMATION_COMPLETE, function () {            
            if (dk.drinker.anims.currentAnim.key === dk.getDrinkerType("in")){
                dk.drinker.play(dk.getDrinkerType("waiting")); 
                if (dk.mapEvent.get(CHARACTER_WAITING) !== undefined) {
                    dk.mapEvent.get(CHARACTER_WAITING)();
                }
            } else if (dk.drinker.anims.currentAnim.key ===  dk.getDrinkerType("drink")){
                // console.log("percentDrink", dk.percentDrink);
                if (dk.percentDrink === 100){
                    dk.drinker.play( dk.getDrinkerType("resp100")); 
                } else if (dk.percentDrink === 75) {
                    dk.drinker.play( dk.getDrinkerType("resp75")); 
                } else if (dk.percentDrink === 50) {
                    dk.drinker.play( dk.getDrinkerType("resp50")); 
                } else if (dk.percentDrink === 25) {
                    dk.drinker.play( dk.getDrinkerType("resp25")); 
                }
            } else if (dk.drinker.anims.currentAnim.key.substring(0, 4) === "resp"){
                // console.log("response", dk.cntDrink)
                dk.cntDrink += 1;
                if (dk.cntDrink < dk.totalDrink) {
                    dk.mapEvent.get(CHARACTER_RESPONSED)();
                    dk.drinker.play( dk.getDrinkerType("waiting")); 
                } else {
                    // console.log("out", dk.cntDrink);
                    dk.mapEvent.get(CHARACTER_OUT)();
                    dk.drinker.play(dk.getDrinkerType("out")); 
                }
                
            }
        }, this.scene);
    }
    addEvent(eventName, callback){
        this.mapEvent.set(eventName, callback);        
    }
    drinkBeer(percentDrink){
        this.percentDrink = percentDrink;
        this.drinker.play("drink");
    }
}
const CHARACTER_WAITING = "WAITING";
const CHARACTER_RESPONSED = "RESPONSED";
const CHARACTER_OUT = "CHARACTER_OUT";
Drinker.CHARACTER_WAITING = CHARACTER_WAITING;
Drinker.CHARACTER_RESPONSED = CHARACTER_RESPONSED;
Drinker.CHARACTER_OUT = CHARACTER_OUT;
