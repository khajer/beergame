import Phaser from 'phaser';

import {MainScene} from './MainScene.js'
import {LoadingScene} from './LoadingScene.js'

const config = {
    type: Phaser.AUTO,
    scale:{
        mode: Phaser.Scale.NONE,
        parent: 'content',        
    },
    parent: 'content',
    width: 800,
    height: 600,
    scene: [LoadingScene, MainScene]
};


config.width = window.innerWidth;
config.height = window.innerHeight;


const game = new Phaser.Game(config);
