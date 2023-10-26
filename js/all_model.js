import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


let mixer;

// 射線及鼠標
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

const clock = new THREE.Clock();
const container = document.getElementById('container');

// 渲染
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);
const pmremGenerator = new THREE.PMREMGenerator(renderer);

// 場景
const scene = new THREE.Scene();
scene.background = new THREE.Color("rgb(172, 207, 207)");
scene.environment = pmremGenerator.fromScene(new RoomEnvironment(renderer), 0.04).texture;

// 攝影機
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 3000);
camera.position.set(1000, 150, 100);

// 輔助座標軸
// const axesHelper = new THREE.AxesHelper(1000);
// scene.add(axesHelper);


// 鼠標控制
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 150, 100);
controls.update();


// 模型牆壁
const loaderWall = new GLTFLoader();
let modelWall;
loaderWall.load('model/MAP.glb', function (gltf) {

    modelWall = gltf.scene;
    modelWall.position.set(0, 0, 0);
    modelWall.scale.set(1, 1, 1);
    scene.add(modelWall);

});

// 動畫初始狀態
let screenIsAnimating = false;
// 模型投影幕
const loaderScreen = new GLTFLoader();
let modelScreen, mixerScreen, clipScreen, actionScreen;
loaderScreen.load('model/projection/projection_screen.glb', function (gltf) {

    modelScreen = gltf.scene;
    modelScreen.position.set(0, 0, 0);
    modelScreen.scale.set(1, 1, 1);
    scene.add(modelScreen);

    // 找到動畫
    clipScreen = THREE.AnimationClip.findByName(gltf.animations, "projection");
    if (clipScreen) {
        mixerScreen = new THREE.AnimationMixer(modelScreen);
        actionScreen = mixerScreen.clipAction(clipScreen);

        if (screenIsAnimating) {
            actionScreen.play();
        }
    }

});

// 模型投影機右
const loaderProjectionR = new GLTFLoader();
let modelProjectionR;
loaderProjectionR.load('model/projection/R_projection.glb', function (gltf) {

    modelProjectionR = gltf.scene;
    modelProjectionR.position.set(0, 0, 0);
    modelProjectionR.scale.set(1, 1, 1);
    scene.add(modelProjectionR);

});

// 模型投影機左
const loaderProjectionL = new GLTFLoader();
let modelProjectionL;
loaderProjectionL.load('model/projection/L_projection.glb', function (gltf) {

    modelProjectionL = gltf.scene;
    modelProjectionL.position.set(0, 0, 0);
    modelProjectionL.scale.set(1, 1, 1);
    scene.add(modelProjectionL);

});

// 模型椅子跟桌子
const loaderCandT = new GLTFLoader();
let modelCandT;
loaderCandT.load('model/chair_table_01/CHaIR_and_table.glb', function (gltf) {

    modelCandT = gltf.scene;
    modelCandT.position.set(0, 0, 0);
    modelCandT.scale.set(1, 1, 1);
    scene.add(modelCandT);

});

// 動畫初始狀態
let chairLIsAnimating = false;
let animationPlayed = false;
// 模型會動椅
const loaderChair = new GLTFLoader();
let modelChair, mixerChair, clipChair, actionChair;
loaderChair.load('model/chair_table_01/CHaIR_ani.glb', function (gltf) {

    modelChair = gltf.scene;
    modelChair.position.set(0, 0, 0);
    modelChair.scale.set(1, 1, 1);
    scene.add(modelChair);

    // 找到動畫
    clipChair = THREE.AnimationClip.findByName(gltf.animations, "CHAIR_ANI");
    if (clipChair) {
        mixerChair = new THREE.AnimationMixer(modelChair);
        actionChair = mixerChair.clipAction(clipChair);
        if (chairLIsAnimating) {
            actionChair.play();
        }
    }

});

// 模型時鐘
const loaderClock = new GLTFLoader();
let modelClock;
loaderClock.load('model/clock/CLOCK.glb', function (gltf) {

    modelClock = gltf.scene;
    modelClock.position.set(0, 0, 0);
    modelClock.scale.set(1, 1, 1);
    scene.add(modelClock);


});

// 模型時鐘分針
let ClockLIsAnimating = false;
const loaderClockL = new GLTFLoader();
let modelClockL, clipClockL, mixerClockL, actionClockL;
loaderClockL.load('model/clock/CLOCK_L.glb', function (gltf) {
    
    modelClockL = gltf.scene;
    modelClockL.position.set(0, 0, 0);
    modelClockL.scale.set(1, 1, 1);
    scene.add(modelClockL);

    // 找到動畫
    clipClockL = THREE.AnimationClip.findByName(gltf.animations, "ConeAction.001");
    if (clipClockL) {
        mixerClockL = new THREE.AnimationMixer(modelClockL);
        actionClockL = mixerClockL.clipAction(clipClockL);
        actionClockL.play();
        // if (ClockLIsAnimating) {
        // }
    }
    
});

// 模型時鐘時針
const loaderClockS = new GLTFLoader();
let modelClockS, clipClockS, actionClockS, mixerClockS;
loaderClockS.load('model/clock/CLOCK_S.glb', function (gltf) {
    
    modelClockS = gltf.scene;
    modelClockS.position.set(0, 0, 0);
    modelClockS.scale.set(1, 1, 1);
    scene.add(modelClockS);

    // 找到動畫
    clipClockS = THREE.AnimationClip.findByName(gltf.animations, "Cone.001Action.001");
    if (clipClockS) {
        mixerClockS = new THREE.AnimationMixer(modelClockS);
        actionClockS = mixerClockS.clipAction(clipClockS);
        actionClockS.play();
        // if (ClockSIsAnimating) {
        // }
    }

});

// 模型電視殼
const loaderTV = new GLTFLoader();
let modelTV;
loaderTV.load('model/tv/TV.glb', function (gltf) {

    modelTV = gltf.scene;
    modelTV.position.set(0, 0, 0);
    modelTV.scale.set(1, 1, 1);
    scene.add(modelTV);


});

// 模型電視螢幕-關
const loaderTVsc = new GLTFLoader();
let modelTVsc;
loaderTVsc.load('model/tv/TV_SC.glb', function (gltf) {

    modelTVsc = gltf.scene;
    modelTVsc.position.set(0, 0, 0);
    modelTVsc.scale.set(1, 1, 1);
    scene.add(modelTVsc);


});

// 模型電視螢幕-開
const loaderTVsc2 = new GLTFLoader();
let modelTVsc2;
loaderTVsc2.load('model/tv/TV_SC_2.glb', function (gltf) {

    modelTVsc2 = gltf.scene;
    modelTVsc2.position.set(0, 0, 0);
    modelTVsc2.scale.set(1, 1, 1);
    // scene.add(modelTVsc2);


});

// 模型吊扇
const loaderFan = new GLTFLoader();
let modelFan;
loaderFan.load('model/fan/FAN.glb', function (gltf) {

    modelFan = gltf.scene;
    modelFan.position.set(0, 0, 0);
    modelFan.scale.set(1, 1, 1);
    scene.add(modelFan);


});

const FanBladeLIsAnimating = false;
// 模型扇葉
const loaderFanBlade = new GLTFLoader();
let modelFanBlade, mixerFanBlade, actionsFanBlade;
let clipsFanBlade = [];
loaderFanBlade.load('model/fan/FAN_P222.glb', function (gltf) {

    modelFanBlade = gltf.scene;
    modelFanBlade.position.set(0, 0, 0);
    modelFanBlade.scale.set(1, 1, 1);
    scene.add(modelFanBlade);

    // 找到動畫
    clipsFanBlade = gltf.animations;
    mixerFanBlade = new THREE.AnimationMixer(modelFanBlade);
    // 初始化數組
    actionsFanBlade = [];

    // 創建並播放每個 AnimationClip
    for (let i = 0; i < clipsFanBlade.length; i++) {
        const action = mixerFanBlade.clipAction(clipsFanBlade[i]);
        action.stop();
        actionsFanBlade.push(action);
    }


});

// 模型吊扇開關-關
const loaderFanSwitch = new GLTFLoader();
let modelFanSwitch;
loaderFanSwitch.load('model/fan/SWITCH_NO_MOO.glb', function (gltf) {

    modelFanSwitch = gltf.scene;
    modelFanSwitch.position.set(0, 0, 0);
    modelFanSwitch.scale.set(1, 1, 1);
    scene.add(modelFanSwitch);


});

// 模型吊扇開關-開
const loaderFanSwitch2 = new GLTFLoader();
let modelFanSwitch2;
loaderFanSwitch2.load('model/fan/SWITCH_NO_MOO_P2.glb', function (gltf) {

    modelFanSwitch2 = gltf.scene;
    modelFanSwitch2.position.set(0, 0, 0);
    modelFanSwitch2.scale.set(1, 1, 1);


});

// 讓縮放畫面的同時保持原有比例，更新畫面
window.addEventListener('resize', onresize);
window.onresize = function () {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

};

// 畫面中的監聽事件-hover手＆點擊
window.addEventListener('mousemove', onMouseMove);
window.addEventListener('click', onClick);

// 鼠標hover-出現手手
function onMouseMove(event) {
    // 更新鼠標的位置
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // 更新 Raycaster
    raycaster.setFromCamera(mouse, camera);

    // 重新計算鼠標懸停的對象
    let intersectsProjectionR = raycaster.intersectObject(modelProjectionR);
    let intersectsChair = raycaster.intersectObject(modelChair);
    let intersectsFanSwitch = raycaster.intersectObject(modelFanSwitch);
    if (intersectsProjectionR.length > 0 || intersectsChair.length > 0 || intersectsFanSwitch.length > 0) {
        document.body.style.cursor = 'pointer';
        // console.log('click');
    } else {
        document.body.style.cursor = 'auto';
    }
}


// 物件被點擊到要做什麼
function onClick(event) {
    raycaster.setFromCamera(mouse, camera);

    let intersectsProjectionR = raycaster.intersectObject(modelProjectionR);
    let intersectsChair = raycaster.intersectObject(modelChair);
    let intersectsFanSwitch = raycaster.intersectObject(modelFanSwitch);

    // 椅子播放動畫
    if (intersectsChair.length > 0) {
        if (mixerChair) {
            if (!actionChair.isRunning()) {
                actionChair.timeScale = 1;
                actionChair.play();
                actionChair.setLoop(THREE.LoopOnce);
                actionChair.clampWhenFinished = true;
                actionChair.reset();
            } else {
                actionChair.timeScale = -1;
                actionChair.play();
                actionChair.setLoop(THREE.LoopOnce);
                actionChair.clampWhenFinished = true;
                // actionChair.stop();
            }
        }
    }


    // 投影布幕降下來
    let screenMode = 0;
    if (intersectsProjectionR.length > 0) {
        if (mixerScreen) {
            if (!actionScreen.isRunning() && screenMode === 1) {
                console.log(2, screenMode);
                actionScreen.timeScale = -1;
                actionScreen.play();
                actionScreen.setLoop(THREE.LoopOnce);
                actionScreen.clampWhenFinished = true;
                screenMode = 0;
                // actionScreen.reset();
            } else if (!actionScreen.isRunning() && screenMode === 0) {
                actionScreen.timeScale = 1;
                actionScreen.play();
                actionScreen.setLoop(THREE.LoopOnce);
                actionScreen.clampWhenFinished = true;
                actionScreen.reset();
                screenMode = 1;
                console.log(1, screenMode);
            }
        }
    }

    // 電風扇運轉
    if (intersectsFanSwitch.length > 0) {
        if (mixerFanBlade) {
            let isAnyFanRunning = false;
            actionsFanBlade.forEach(action => {
                if (action.isRunning()) {
                    scene.remove(modelFanSwitch2);
                    scene.add(modelFanSwitch);
                    isAnyFanRunning = true;
                    action.stop();
                } else {
                    scene.remove(modelFanSwitch);
                    scene.add(modelFanSwitch2);
                    action.play();
                }
            });

            if (!isAnyFanRunning) {
                // 默認播放第一個動畫
                actionsFanBlade[0].play();
            }
        }
    }

}

renderer.domElement.style.touchAction = 'none';


function animate() {

    requestAnimationFrame(animate);

    const delta = clock.getDelta();

    if (mixer) {
        mixer.update(delta);
    }

    if (modelScreen && mixerScreen) {
        mixerScreen.update(delta);
    }

    if (modelChair && mixerChair) {
        mixerChair.update(delta);
    }

    if (modelFanBlade && mixerFanBlade) {
        mixerFanBlade.update(delta);
    }
    
    if (modelClockL && mixerClockL) {
        mixerClockL.update(delta);
    }
    
    if (modelClockS && mixerClockS) {
        mixerClockS.update(delta);
    }

    controls.update();

    camera.updateProjectionMatrix();

    raycaster.setFromCamera(mouse, camera);
    renderer.render(scene, camera);

}


animate();
