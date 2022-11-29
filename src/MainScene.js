import Phaser from 'phaser';

import background from './assets/images/backgrounds/1.png';
import logo from './assets/images/objects/logo.png';
import howto from './assets/images/objects/howto.png';
import sndBgMp3 from "./assets/sounds/bg.mp3";
import sndBgOgg from "./assets/sounds/bg.ogg";

import flaresPng from './assets/particles/flares.png';
import flaresJson from './assets/particles/flares.json';


import {ProgressBar} from './progressbar.js';
import {ScorePoint} from './scorepoint.js'
import {Beer} from './beer.js'
import {Drinker} from './drinker.js'

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
        this.timeDelayPourCompleted = 200;
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
        
        this.background = this.add.sprite(this.game.config.width / 2, 520, 'background');
        this.showlogoAndHowToPlay();  

        this.particles = this.add.particles('flares');
        
    }
    static loading(scene){

        scene.load.image('background', background);     
        scene.load.image('howto', howto);
        scene.load.image('logo', logo);
        scene.load.audio('sndBg', [sndBgMp3, sndBgOgg]);
        
        scene.load.atlas('flares', flaresPng, flaresJson);
    }

    showlogoAndHowToPlay(){
        let hide = false;
        let logo = this.add.sprite(this.game.config.width / 2, 580, 'logo');
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

        let howto = this.add.sprite(this.game.config.width / 2, 1220, 'howto');
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
        let par = this.particles.createEmitter({
            frame: [ 'red', 'yellow', 'green' ],
            x: 400, y: 300,
            lifespan: 500,
            speed: { min: 100, max: 250 },
            scale: { start: 0.4, end: 0 },
            gravityY: 150,
            blendMode: 'ADD'
        });
        setTimeout(()=>{
            par.stop();
            this.resetStartGame();
            
        }, 500);

        

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