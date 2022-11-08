import {UserDrink} from "./UserDrink.js"

import atariPng from "./assets/fonts/atari-smooth.png";
import atariXml from './assets/fonts/atari-smooth.xml';

import sndrespOne100Mp3 from "./assets/sounds/resp_1_100.mp3";
import sndrespOne100Ogg from "./assets/sounds/resp_1_100.ogg";
import sndrespOneOtherMp3 from "./assets/sounds/resp_1_other.mp3";
import sndrespOneOtherOgg from "./assets/sounds/resp_1_other.ogg";


export class Drinker{
    constructor(scene){
        this.scene = scene;
        this.mapEvent = new Map();        
        this.percentDrink = 0;
        this.drinkerType = 0;
        
        this.cntDrink = 0;
        this.totalDrink = 2;
    }

    preload(){
        UserDrink.loadImage(this.scene);
        this.scene.load.bitmapFont('atari', atariPng, atariXml);        
        this.scene.load.audio('sndrespOne1-100', [sndrespOne100Mp3, sndrespOne100Ogg]);
        this.scene.load.audio('sndrespOne1-other', [sndrespOneOtherMp3, sndrespOneOtherOgg]);
    }        
    
    create(){
        this.sndRespOne100 = this.scene.sound.add('sndrespOne1-100');
        this.sndRespOneOther = this.scene.sound.add('sndrespOne1-other');

        UserDrink.createAnimation(this.scene);                
        this.drinker = this.scene.add.sprite(this.scene.game.config.width / 2, 1060, this.playState('waiting'));
        this.drinker.setOrigin(0.5, 1);
        let dk = this;

        this.drinker.on(Phaser.Animations.Events.ANIMATION_COMPLETE, function () {            
            console.log("animation completed ", dk.drinker.anims.currentAnim.key);
            if (dk.drinker.anims.currentAnim.key === dk.playState("in")){
                dk.drinker.play(dk.playState("waiting")); 
                if (dk.mapEvent.get(CHARACTER_WAITING) !== undefined) {
                    dk.mapEvent.get(CHARACTER_WAITING)();
                }
            } else if (dk.drinker.anims.currentAnim.key ===  dk.playState("drink")){
                
                dk.addPoint(dk.percentDrink, dk.scene.game.config.width / 2, 800); 

                if (dk.percentDrink === 100){
                    dk.sndRespOne100.play();
                    dk.drinker.play( dk.playState("resp100")); 
                    dk.progressbar.addProgress(10);
                } else if (dk.percentDrink === 75) {
                    dk.drinker.play( dk.playState("resp75"));
                    dk.sndRespOneOther.play();                     
                } else if (dk.percentDrink === 50) {
                    dk.drinker.play( dk.playState("resp50"));
                    dk.sndRespOneOther.play(); 
                } else if (dk.percentDrink === 25) {
                    dk.drinker.play( dk.playState("resp25")); 
                } else if (dk.percentDrink === -50) {
                    dk.drinker.play( dk.playState("resp25")); 
                }
                dk.scorePoint.addPoint(dk.percentDrink);
            } else if (dk.drinker.anims.currentAnim.key.substring(2, 6) === "resp"){                
                dk.cntDrink += 1;
                if (dk.cntDrink < dk.totalDrink) {
                    dk.mapEvent.get(CHARACTER_RESPONSED)();
                    dk.drinker.play( dk.playState("waiting")); 
                } else {                    
                    dk.drinker.play(dk.playState("out")); 
                }                
            } else if (dk.drinker.anims.currentAnim.key == dk.playState("out")){
                dk.mapEvent.get(CHARACTER_OUT)();         
            }                                        
        }, this.scene);
    }
    playState(stateName){        
        return this.drinkerType + "-" + stateName;               
    }

    setDrinkerComeIn(drinkerType, totalDrink){
        this.drinkerType = drinkerType;
        this.drinker.play(this.playState("in"));
        this.cntDrink = 0;
        this.totalDrink = totalDrink;
    }
    addEvent(eventName, callback){
        this.mapEvent.set(eventName, callback);        
    }
    drinkBeer(percentDrink){
        this.percentDrink = percentDrink;
        this.drinker.play(this.playState("drink"));
    }
    addPoint( point, x, y) {
        var txtPoint = (point>0)? "+" + point: "" + point;
        let bitmapFont = this.scene.add.bitmapText(x, y, 'atari', txtPoint)
            .setOrigin(0.5)
            .setFontSize(40);

        this.scene.tweens.add({
            targets: [bitmapFont],
            y: "-=20",
            alpha: "0.1",
            duration : 500,
            ease: 'Power0', 
            repeat: 0,
            onComplete:()=>{
                bitmapFont.destroy();
            }
        });
    }

    setPointObject(progressbar, scorePoint){
        this.progressbar = progressbar;
        this.scorePoint = scorePoint;
    }
}
const CHARACTER_WAITING = "WAITING";
const CHARACTER_RESPONSED = "RESPONSED";
const CHARACTER_OUT = "CHARACTER_OUT";
Drinker.CHARACTER_WAITING = CHARACTER_WAITING;
Drinker.CHARACTER_RESPONSED = CHARACTER_RESPONSED;
Drinker.CHARACTER_OUT = CHARACTER_OUT;
