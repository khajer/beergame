export class ProgressBar {
    constructor (scene, game){

        this.pgBackground = scene.make.image({
            x: game.config.width / 2,
            y: 100,
            key: 'pg_background',
            add: true
        });
        this.mask = scene.make.image({
            x: game.config.width / 2,
            y: 100,
            key: 'pg_mask',
            add: false
        });
        var newX = game.config.width / 2;
        // newX -= 100;
        this.pgProgress = scene.make.image({
            x: newX,
            y: 100,
            key: 'pg_progress',
            add: true
        });
        this.pgProgress.mask = new Phaser.Display.Masks.BitmapMask(scene, this.mask);
        // scene.tweens.add({
        //     targets: this.mask,
        //     alpha: 0.2,
        //     // x: -200,
        //     duration: 400,
        //     // ease: 'Sine.easeInOut',
        //     ease: 'Linear',
        //     loop: -1,
        //     yoyo: true
        // });
        
    }
    update(){
        
        this.pgProgress.x -= 0.5;
    }

    addProgress(){
        this.pgProgress.x += 50;
    }
        
}