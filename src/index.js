import Phaser from 'phaser';

import background from './assets/images/backgrounds/1.png';

import {ProgressBar} from './progressbar.js';
import {Beer} from './beer.js'
import {Drinker} from './drinker.js'

class MyGame extends Phaser.Scene
{    
    constructor ()
    {
        super();        
        this.bar = new ProgressBar(this);        
        this.drinker = new Drinker(this);

        this.beer = new Beer(this);
        this.timeDelayPourCompleted = 200;
        this.objGames = [
            this.bar, 
            this.drinker,
            this.beer            
        ];
    }

    preload ()
    {   
        this.load.image('background', background);     
        
        this.objGames.forEach(e=>{
            if (e.preload !== undefined){
                e.preload();
            }            
        });
    
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
    create (){       
        this.background = this.add.sprite(this.game.config.width / 2, 500, 'background');
        this.objGames.forEach(e=>{
            if (e.create !== undefined){
                e.create();
            }            
        });  
                
        this.setPlayerComeIn();
        this.drinker.addEvent(Drinker.CHARACTER_WAITING , ()=>{
            console.log("waiting !!!");
            this.beer.availablePour = true;
            this.beer.beer.play('beerplay').stop();
            this.beer.show();
        });
        this.drinker.addEvent(Drinker.CHARACTER_RESPONSED , ()=>{
            console.log("response completed !!!");
            this.beer.availablePour = true;
            this.beer.beer.play('beerplay').stop();
            this.beer.show();
        });

        this.drinker.addEvent(Drinker.CHARACTER_OUT , ()=>{
            console.log("go out !!!"); 
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

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1025,
    height: 1530,
    scene: MyGame
};

const game = new Phaser.Game(config);
