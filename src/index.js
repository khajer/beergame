import Phaser from 'phaser';

import {MainScene} from './MainScene.js'
import {LoadingScene} from './LoadingScene.js'

const config = {
    type: Phaser.AUTO,
    parent: 'content',
    width: 1025,
    height: 1530,
    scene: [LoadingScene, MainScene]
};

const game = new Phaser.Game(config);
