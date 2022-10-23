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
      
    create (){       
        this.background = this.add.sprite(this.game.config.width / 2, 500, 'background');
        this.objGames.forEach(e=>{
            if (e.create !== undefined){
                e.create();
            }            
        });  
        let beer = this.beer;
        this.drinker.addEvent(Drinker.CHARACTER_WAITING , ()=>{
            console.log("waiting !!!");
            beer.availablePour = true;
        });

        this.beer.addEvent(Beer.BEER_COMPLETED_100, ()=>{
            console.log("completed 100");
            beer.availablePour = false;
            setTimeout(()=>{
                this.beer.hide();
                this.drinker.drinkBeer(100);
            }, 1000);
        });
        this.beer.addEvent(Beer.BEER_COMPLETED_75, ()=>{
            console.log("completed 75");
            beer.availablePour = false;
            setTimeout(()=>{
                this.beer.hide();
                this.drinker.drinkBeer(75);
            }, 1000);
            

        });
        this.beer.addEvent(Beer.BEER_COMPLETED_50, ()=>{
            console.log("completed 50");
            beer.availablePour = false;
            setTimeout(()=>{
                this.beer.hide();
                this.drinker.drinkBeer(50);
            }, 1000);
        });
        this.beer.addEvent(Beer.BEER_COMPLETED_25, ()=>{
            console.log("completed 25");
            beer.availablePour = false;
            setTimeout(()=>{
                this.beer.hide();
                this.drinker.drinkBeer(25);
            }, 1000);
        });      
        
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
