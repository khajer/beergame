import Phaser from 'phaser';
import loading0 from './assets/images/objects/loading-0.png';
import loading100 from './assets/images/objects/loading-100.png';

import {ProgressBar} from './progressbar.js';
import {ScorePoint} from './scorepoint.js'
import {Beer} from './beer.js'
import {Drinker} from './drinker.js'
import {MainScene} from './MainScene.js'

export class LoadingScene extends Phaser.Scene
{    
    constructor ()
    {
        super({
            key: "LoadingScene",
            pack: {
				files: [
					{ type: 'image', key: 'loadingbar_bg', url: loading0 },
					{ type: 'image', key: 'loadingbar_fill', url: loading100 }
				]
			}
        });        
        
    }

    preload ()
    {   
        this.canvas = this.sys.game.canvas;
        this.loadingbar_bg   = this.add.sprite(this.canvas.width/2, this.canvas.height/2, "loadingbar_bg");
		this.loadingbar_fill = this.add.sprite(this.canvas.width/2, this.canvas.height/2, "loadingbar_fill");

        this.preloadSprite = { sprite: this.loadingbar_fill, width: this.loadingbar_fill.width, height: this.loadingbar_fill.height };
		this.loadingbar_fill.visible = true;

        ProgressBar.loading(this);
        ScorePoint.loading(this);
        Beer.loading(this);
        Drinker.loading(this);
        MainScene.loading(this);

		this.load.on('progress', this.onProgress, this );



    }      
    
    create (){       
        
        this.scene.start('MainScene');
        
    }

    onProgress(value) {
		if (this.preloadSprite)
		{
			var w = Math.floor(this.preloadSprite.width * value);
		
			this.preloadSprite.sprite.frame.width    = (w <= 0 ? 1 : w);
			this.preloadSprite.sprite.frame.cutWidth = w;

			this.preloadSprite.sprite.frame.updateUVs();
		}
	}

     
}