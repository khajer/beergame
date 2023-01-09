import Phaser from 'phaser';

import background from './assets/images/backgrounds/1.png';
import logo from './assets/images/objects/logo.png';
import howto from './assets/images/objects/howto.png';
import btnPlayAgain from './assets/images/objects/btnPlayAgain.png';
import bgFinalScore from './assets/images/objects/bgFinalScore.png';
import sndBgMp3 from "./assets/sounds/bg.mp3";
import sndBgOgg from "./assets/sounds/bg.ogg";

import flaresPng from './assets/particles/flares.png';
import flaresJson from './assets/particles/flares.json';

import {ProgressBar} from './progressbar.js';
import {ScorePoint} from './scorepoint.js'
import {Beer} from './beer.js'
import {Drinker} from './drinker.js'

const LOGO_H = 580/3; 
const BACKGROND_H = 520/3;
const HOWTO_H = 1220/3;
const TIMEDELAY = 200;

const BTN_PLAYAGIN_Y = 300;
const BTN_FINALSCORE_Y = 260;// 780;
const TXT_FINALSCORE_Y = 265; //790 /3 
const FONT_TXT_FINAL_SIZE = 20;
const PARTICLE_Y = 260; //780;

export class MainScene extends Phaser.Scene
{    
    constructor ()
    {
        super({
            key: "MainScene"
        }); 
               
        this.bar = new ProgressBar(this);        
        this.drinker = new Drinker(this);
        this.scorePoint = new ScorePoint(this);

        this.beer = new Beer(this);
        this.timeDelayPourCompleted = TIMEDELAY;
        this.objGames = [
            this.bar, 
            this.drinker,
            this.beer,
            this.scorePoint            
        ];
    }

    preload ()
    {           
        this.objGames.forEach(e=>{
            if (e.preload !== undefined){
                e.preload();
            }            
        });    
    }      
    
    create (){       
        this.sndBg = this.sound.add('sndBg', {
            mute: false,
            volume: 0.2,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        });        
        this.sndBg.play();        
        
        this.background = this.add.sprite(this.game.config.width / 2, BACKGROND_H, 'background');
        this.showlogoAndHowToPlay();  
        
    }
    static loading(scene){
        scene.load.image('background', background);     
        scene.load.image('howto', howto);
        scene.load.image('logo', logo);
        scene.load.image('btnPlayAgain', btnPlayAgain);
        scene.load.image('bgFinalScore', bgFinalScore);

        scene.load.audio('sndBg', [sndBgMp3, sndBgOgg]);
        
        scene.load.atlas('flares', flaresPng, flaresJson);
    }

    showlogoAndHowToPlay(){
        let hide = false;
        let logo = this.add.sprite(this.game.config.width / 2, LOGO_H, 'logo');
        logo.setInteractive()
        .on('pointerdown', ()=>{
            if (hide) return;
            hide = true;
            this.hideLogoAndHowToPlay(logo, howto);
            
        });

        this.tweens.add({
            targets: [logo],
            scaleX: 0.96,
            scaleY: 0.96,
            ease: 'Sine.easeInOut',
            duration: 2000,
            delay: 50,
            repeat: -1,
            yoyo: true
        });        

        let howto = this.add.sprite(this.game.config.width / 2, HOWTO_H, 'howto');
        howto.setInteractive()
        .on('pointerdown', ()=>{
            if (hide) return;
            hide = true;
            this.hideLogoAndHowToPlay(logo, howto);
        });;
    }
    hideLogoAndHowToPlay(logo, howto){
        
        this.tweens.add({
            targets: [logo],
            y: "-=" + 100,
            alpha: 0.2,
            duration: 200,
            ease: 'Linear',
            repeat: 0,
            onComplete:()=>{
                this.startGame()
                logo.destroy();
            }                    
        })
    
        howto.destroy();
    }
    
    resetStartGame(){  
        this.objGames.forEach(e=>{
            if (e.reset !== undefined){
                e.reset();
            }            
        });        
        this.setPlayerComeIn();

    }
    startGame(){
        this.objGames.forEach(e=>{
            if (e.create !== undefined){
                e.create();
            }            
        });  

        this.setPlayerComeIn();
        this.drinker.setPointObject(this.bar, this.scorePoint);
        this.drinker.addEvent(Drinker.CHARACTER_WAITING , ()=>{
            this.beer.availablePour = true;
            this.beer.beer.play('beerplay').stop();
            this.beer.show();
        });
        this.drinker.addEvent(Drinker.CHARACTER_RESPONSED , ()=>{
            this.beer.availablePour = true;
            this.beer.beer.play('beerplay').stop();
            this.beer.show();
        });

        this.drinker.addEvent(Drinker.CHARACTER_OUT , ()=>{
            this.setPlayerComeIn();         
        });

        let beer = this.beer;
        this.beer.addEvent(Beer.BEER_COMPLETED_100, ()=>{            
            this.pourBeerCompleted(beer, 100);        
        });
        this.beer.addEvent(Beer.BEER_COMPLETED_75, ()=>{
            this.pourBeerCompleted(beer, 75);            
        });
        this.beer.addEvent(Beer.BEER_COMPLETED_50, ()=>{            
            this.pourBeerCompleted(beer, 50);            
        });
        this.beer.addEvent(Beer.BEER_COMPLETED_25, ()=>{
            this.pourBeerCompleted(beer, 25);            
        });
        this.beer.addEvent(Beer.BEER_COMPLETED_OVER, ()=>{              
            this.pourBeerCompleted(beer, -50);            
        });             

        this.bar.addGameoverFunc(()=>{
            console.log("game over");            
            this.gameover = true;
            this.showGameover();

        });
    }

    showGameover(){
        
        let bgFinalScore = this.add.sprite(this.game.config.width / 2, BTN_FINALSCORE_Y, 'bgFinalScore');
        let txtFinallScore = this.add.bitmapText(this.game.config.width / 2, TXT_FINALSCORE_Y, 'atari-1', this.scorePoint.point, FONT_TXT_FINAL_SIZE).setOrigin(0.5);        
        let btnPlayAgain = this.add.sprite(this.game.config.width / 2, BTN_PLAYAGIN_Y, 'btnPlayAgain')
            .setInteractive()
            .on('pointerdown', ()=>{
            this.resetStartGame();                        
            btnPlayAgain.destroy();
            bgFinalScore.destroy();
            txtFinallScore.destroy();
        });

        if (this.particles){
            this.particles.destroy();          
        }
        this.particles = this.add.particles('flares');

        let pars = [];
        
        for(var i=0; i< 4; i++){
            let par = this.particles.createEmitter({
                frame: [ 'red', 'yellow', 'green', 'white' ],
                x: (this.game.config.width / 2) - (100) + (i*50), 
                y: PARTICLE_Y,
                lifespan: 1000,
                speed: { min: 100, max: 250 },
                scale: { start: 0.2, end: 0 },
                gravityY: 500,
                blendMode: 'ADD',
                
            });
            
            pars.push(par);
        }
        
        
        setTimeout(()=>{
            pars.forEach((e)=>{
                e.stop();
            });            
        }, 50);
    }

    setPlayerComeIn(){
        const maxType = 3; 
        const maxDrink = 4;

        let drinkerType = Math.floor(Math.random() * maxType);
        let totalDrink = Math.floor(Math.random() * maxDrink);
        console.log(drinkerType, totalDrink);
        this.drinker.setDrinkerComeIn(drinkerType, totalDrink);   
        this.beer.availablePour = true;
        this.beer.beer.play('beerplay').stop();
        this.beer.hide();
    }

    pourBeerCompleted(beer, percentPour){
        beer.availablePour = false;
        setTimeout(()=>{
            this.beer.hide();
            this.drinker.drinkBeer(percentPour);
            
        }, this.timeDelayPourCompleted);
    }
    
    update(){
        this.objGames.forEach(e=>{            
            if(e.update !== undefined){
                e.update();
            }            
        }); 
    }    
}