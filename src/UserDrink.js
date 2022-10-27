import ch0_waiting_1 from './assets/images/characters/0/waiting/1.png';
import ch0_waiting_2 from './assets/images/characters/0/waiting/2.png';
import ch0_waiting_3 from './assets/images/characters/0/waiting/3.png';
import ch0_waiting_4 from './assets/images/characters/0/waiting/4.png';
import ch0_in_1 from './assets/images/characters/0/in/1.png';
import ch0_in_2 from './assets/images/characters/0/in/2.png';
import ch0_in_3 from './assets/images/characters/0/in/3.png';
import ch0_in_4 from './assets/images/characters/0/in/4.png';
import ch0_out_1 from './assets/images/characters/0/out/1.png';
import ch0_out_2 from './assets/images/characters/0/out/2.png';
import ch0_out_3 from './assets/images/characters/0/out/3.png';
import ch0_out_4 from './assets/images/characters/0/out/4.png';
import ch0_drink_1 from './assets/images/characters/0/drink/1.png';
import ch0_drink_2 from './assets/images/characters/0/drink/2.png';
import ch0_drink_3 from './assets/images/characters/0/drink/3.png';
import ch0_drink_4 from './assets/images/characters/0/drink/4.png';
import ch0_resp_100_1 from './assets/images/characters/0/response/100/1.png';
import ch0_resp_100_2 from './assets/images/characters/0/response/100/2.png';
import ch0_resp_75_1 from './assets/images/characters/0/response/75/1.png';
import ch0_resp_75_2 from './assets/images/characters/0/response/75/2.png';
import ch0_resp_50_1 from './assets/images/characters/0/response/50/1.png';
import ch0_resp_50_2 from './assets/images/characters/0/response/50/2.png';
import ch0_resp_25_1 from './assets/images/characters/0/response/25/1.png';
import ch0_resp_25_2 from './assets/images/characters/0/response/25/2.png';

import ch1_waiting_1 from './assets/images/characters/1/waiting/1.png';
import ch1_waiting_2 from './assets/images/characters/1/waiting/2.png';
import ch1_in_1 from './assets/images/characters/1/in/1.png';
import ch1_in_2 from './assets/images/characters/1/in/2.png';
import ch1_in_3 from './assets/images/characters/1/in/3.png';
import ch1_in_4 from './assets/images/characters/1/in/4.png';
import ch1_out_1 from './assets/images/characters/1/out/1.png';
import ch1_out_2 from './assets/images/characters/1/out/2.png';
import ch1_out_3 from './assets/images/characters/1/out/3.png';
import ch1_out_4 from './assets/images/characters/1/out/4.png';
import ch1_drink_1 from './assets/images/characters/1/drink/1.png';
import ch1_drink_2 from './assets/images/characters/1/drink/2.png';
import ch1_drink_3 from './assets/images/characters/1/drink/3.png';
import ch1_drink_4 from './assets/images/characters/1/drink/4.png';
import ch1_resp_100_1 from './assets/images/characters/1/response/100/1.png';
import ch1_resp_100_2 from './assets/images/characters/1/response/100/2.png';
import ch1_resp_75_1 from './assets/images/characters/1/response/75/1.png';
import ch1_resp_75_2 from './assets/images/characters/1/response/75/2.png';
import ch1_resp_50_1 from './assets/images/characters/1/response/50/1.png';
import ch1_resp_50_2 from './assets/images/characters/1/response/50/2.png';
import ch1_resp_25_1 from './assets/images/characters/1/response/25/1.png';
import ch1_resp_25_2 from './assets/images/characters/1/response/25/2.png';

const ani = {    
    "0": {
        "resp100": {
            keyframe: [
                { key: ["ch0_resp_100_1"] },
                { key: ["ch0_resp_100_2"] },
            ],
            frameRate: 8,
            repeat: 0
        },
        "resp75": {
            keyframe: [
                { key: ["ch0_resp_75_1"] },
                { key: ["ch0_resp_75_2"] },
            ],
            frameRate: 8,
            repeat: 0
        },
        "resp50": {
            keyframe: [
                { key: ["ch0_resp_50_1"] },
                { key: ["ch0_resp_50_2"] },
            ],
            frameRate: 8,
            repeat: 0
        },
        "resp25": {
            keyframe: [
                { key: ["ch0_resp_25_1"] },
                { key: ["ch0_resp_25_2"] },
            ],
            frameRate: 8,
            repeat: 0
        },
        "resp0": {
            keyframe: [
                { key: ["ch0_resp_0_1"] },
                { key: ["ch0_resp_0_2"] },
            ]
        },
        "in": {
            keyframe: [
                { key: ["ch0_in_1"] },
                { key: ["ch0_in_2"] },
                { key: ["ch0_in_3"] },
                { key: ["ch0_in_4"] },
            ],
            frameRate: 8,
            repeat: 0
        },
        "out": {
            keyframe: [
                { key: ["ch0_out_1"] },
                { key: ["ch0_out_2"] },
                { key: ["ch0_out_3"] },
                { key: ["ch0_out_4"] },
            ],
            frameRate: 8,
            repeat: 0
        },
        "drink": {
            keyframe: [
                { key: ["ch0_drink_1"] },
                { key: ["ch0_drink_2"] },
                { key: ["ch0_drink_3"] },
                { key: ["ch0_drink_4"] },
            ],
            frameRate: 8,
            repeat: 0
        },
        "waiting": {
            keyframe: [
                { key: ["ch0_waiting_1"] },
                { key: ["ch0_waiting_2"] },
                { key: ["ch0_waiting_3"] },
                { key: ["ch0_waiting_4"] },
            ],
            frameRate: 8,
            repeat: -1
        }
    },
    "1": {
        "resp100": {
            keyframe: [
                { key: ["ch1_resp_100_1"] },
                { key: ["ch1_resp_100_2"] },
            ],
            frameRate: 8,
            repeat: 0
        },
        "resp75": {
            keyframe: [
                { key: ["ch1_resp_75_1"] },
                { key: ["ch1_resp_75_2"] },
            ],
            frameRate: 8,
            repeat: 0
        },
        "resp50": {
            keyframe: [
                { key: ["ch1_resp_50_1"] },
                { key: ["ch1_resp_50_2"] },
            ],
            frameRate: 8,
            repeat: 0
        },
        "resp25": {
            keyframe: [
                { key: ["ch1_resp_25_1"] },
                { key: ["ch1_resp_25_2"] },
            ],
            frameRate: 8,
            repeat: 0
        },
        "resp0": {
            keyframe: [
                { key: ["ch1_resp_0_1"] },
                { key: ["ch1_resp_0_2"] },
            ]
        },
        "in": {
            keyframe: [
                { key: ["ch1_in_1"] },
                { key: ["ch1_in_2"] },
                { key: ["ch1_in_3"] },
                { key: ["ch1_in_4"] },
            ],
            frameRate: 8,
            repeat: 0
        },
        "out": {
            keyframe: [
                { key: ["ch1_out_1"] },
                { key: ["ch1_out_2"] },
                { key: ["ch1_out_3"] },
                { key: ["ch1_out_4"] },
            ],
            frameRate: 8,
            repeat: 0
        },
        "drink": {
            keyframe: [
                { key: ["ch1_drink_1"] },
                { key: ["ch1_drink_2"] },
                { key: ["ch1_drink_3"] },
                { key: ["ch1_drink_4"] },
            ],
            frameRate: 8,
            repeat: 0
        },
        "waiting": {
            keyframe: [
                { key: ["ch1_waiting_1"] },
                { key: ["ch1_waiting_2"] },
            ],
            frameRate: 8,
            repeat: -1
        }
    }
}
export class UserDrink{
    constructor() {

    }
    static loadImage(scene){
        scene.load.image('ch0_waiting_1', ch0_waiting_1);
        scene.load.image('ch0_waiting_2', ch0_waiting_2);
        scene.load.image('ch0_waiting_3', ch0_waiting_3);
        scene.load.image('ch0_waiting_4', ch0_waiting_4);
        scene.load.image('ch0_in_1', ch0_in_1);
        scene.load.image('ch0_in_2', ch0_in_2);
        scene.load.image('ch0_in_3', ch0_in_3);
        scene.load.image('ch0_in_4', ch0_in_4);
        scene.load.image('ch0_out_1', ch0_out_1);
        scene.load.image('ch0_out_2', ch0_out_2);
        scene.load.image('ch0_out_3', ch0_out_3);
        scene.load.image('ch0_out_4', ch0_out_4);
        scene.load.image('ch0_drink_1', ch0_drink_1);
        scene.load.image('ch0_drink_2', ch0_drink_2);
        scene.load.image('ch0_drink_3', ch0_drink_3);
        scene.load.image('ch0_drink_4', ch0_drink_4);
        scene.load.image('ch0_resp_100_1', ch0_resp_100_1);
        scene.load.image('ch0_resp_100_2', ch0_resp_100_2);
        scene.load.image('ch0_resp_75_1', ch0_resp_75_1);
        scene.load.image('ch0_resp_75_2', ch0_resp_75_2);       
        scene.load.image('ch0_resp_50_1', ch0_resp_50_1);
        scene.load.image('ch0_resp_50_2', ch0_resp_50_2);        
        scene.load.image('ch0_resp_25_1', ch0_resp_25_1);
        scene.load.image('ch0_resp_25_2', ch0_resp_25_2);  

        scene.load.image("ch1_waiting_1", ch1_waiting_1);
        scene.load.image("ch1_waiting_2", ch1_waiting_2);
        scene.load.image("ch1_in_1", ch1_in_1);
        scene.load.image("ch1_in_2", ch1_in_2);
        scene.load.image("ch1_in_3", ch1_in_3);
        scene.load.image("ch1_in_4", ch1_in_4);
        scene.load.image("ch1_out_1", ch1_out_1);
        scene.load.image("ch1_out_2", ch1_out_2);
        scene.load.image("ch1_out_3", ch1_out_3);
        scene.load.image("ch1_out_4", ch1_out_4);
        scene.load.image("ch1_drink_1", ch1_drink_1);
        scene.load.image("ch1_drink_2", ch1_drink_2);
        scene.load.image("ch1_drink_3", ch1_drink_3);
        scene.load.image("ch1_drink_4", ch1_drink_4);
        scene.load.image("ch1_resp_100_1", ch1_resp_100_1);
        scene.load.image("ch1_resp_100_2", ch1_resp_100_2);
        scene.load.image("ch1_resp_75_1", ch1_resp_75_1);
        scene.load.image("ch1_resp_75_2", ch1_resp_75_2);
        scene.load.image("ch1_resp_50_1", ch1_resp_50_1);
        scene.load.image("ch1_resp_50_2", ch1_resp_50_2);
        scene.load.image("ch1_resp_25_1", ch1_resp_25_1);
        scene.load.image("ch1_resp_25_2", ch1_resp_25_2);
               
    }
    static createAnimation(scene){                        
        Object.keys(ani).forEach( e =>{
            Object.keys(ani[e]).forEach (ee=>{                                
                scene.anims.create({
                    key: e + "-" + ee,
                    frames: ani[e][ee].keyframe,
                    frameRate: ani[e][ee].frameRate,
                    repeat: ani[e][ee].repeat
                });
            });
        });
    }
}
