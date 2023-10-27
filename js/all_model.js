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
camera.position.set(1000, 100, 130);

// 輔助座標軸
// const axesHelper = new THREE.AxesHelper(1000);
// scene.add(axesHelper);


// 鼠標控制
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 100, 130);
controls.update();


// 模型牆壁
const loaderWall = new GLTFLoader();
let modelWall;
loaderWall.load('model/MAP.glb', function (gltf) {

    modelWall = gltf.scene;
    scene.add(modelWall);

});

// 動畫初始狀態
let screenIsAnimating = false;
// 模型投影幕
const loaderScreen = new GLTFLoader();
let modelScreen, mixerScreen, clipScreen, actionScreen;
loaderScreen.load('model/projection/projection_screen.glb', function (gltf) {

    modelScreen = gltf.scene;
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
    scene.add(modelProjectionR);

});

// 模型投影機左
const loaderProjectionL = new GLTFLoader();
let modelProjectionL;
loaderProjectionL.load('model/projection/L_projection.glb', function (gltf) {

    modelProjectionL = gltf.scene;
    scene.add(modelProjectionL);

});

// 模型椅子跟桌子
const loaderCandT = new GLTFLoader();
let modelCandT;
loaderCandT.load('model/chair_table_01/CHaIR_and_table.glb', function (gltf) {

    modelCandT = gltf.scene;
    scene.add(modelCandT);

});

// 動畫初始狀態
let chairLIsAnimating = false;
// 模型會動椅
const loaderChair = new GLTFLoader();
let modelChair, mixerChair, clipChair, actionChair;
loaderChair.load('model/chair_table_01/CHaIR_ani.glb', function (gltf) {

    modelChair = gltf.scene;
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
    scene.add(modelClock);


});

// 模型時鐘分針
const loaderClockL = new GLTFLoader();
let modelClockL, clipClockL, mixerClockL, actionClockL;
loaderClockL.load('model/clock/CLOCK_L.glb', function (gltf) {

    modelClockL = gltf.scene;
    scene.add(modelClockL);

    // 找到動畫
    clipClockL = THREE.AnimationClip.findByName(gltf.animations, "ConeAction.001");
    if (clipClockL) {
        mixerClockL = new THREE.AnimationMixer(modelClockL);
        actionClockL = mixerClockL.clipAction(clipClockL);
        actionClockL.play();
    }

});

// 模型時鐘時針
const loaderClockS = new GLTFLoader();
let modelClockS, clipClockS, actionClockS, mixerClockS;
loaderClockS.load('model/clock/CLOCK_S.glb', function (gltf) {

    modelClockS = gltf.scene;
    scene.add(modelClockS);

    // 找到動畫
    clipClockS = THREE.AnimationClip.findByName(gltf.animations, "Cone.001Action.001");
    if (clipClockS) {
        mixerClockS = new THREE.AnimationMixer(modelClockS);
        actionClockS = mixerClockS.clipAction(clipClockS);
        actionClockS.play();
    }

});

// 模型電視殼
const loaderTV = new GLTFLoader();
let modelTV;
loaderTV.load('model/tv/TV.glb', function (gltf) {

    modelTV = gltf.scene;
    scene.add(modelTV);


});

// 模型電視螢幕-關
let TVclosed = true;
const loaderTVsc = new GLTFLoader();
let modelTVsc;
loaderTVsc.load('model/tv/TV_SC.glb', function (gltf) {

    modelTVsc = gltf.scene;
    scene.add(modelTVsc);

});

// 模型電視螢幕-開
const loaderTVsc2 = new GLTFLoader();
let modelTVsc2;
loaderTVsc2.load('model/tv/TV_SC_2.glb', function (gltf) {

    modelTVsc2 = gltf.scene;

});

// 模型音響
const loaderSpeaker = new GLTFLoader();
let modelSpeaker;
loaderSpeaker.load('model/other_models/SPEAKER.glb', function (gltf) {

    modelSpeaker = gltf.scene;
    scene.add(modelSpeaker);

});

// 模型窗戶框
const loaderWindows = new GLTFLoader();
let modelWindows;
loaderWindows.load('model/other_models/window.glb', function (gltf) {

    modelWindows = gltf.scene;
    scene.add(modelWindows);

});

// 模型講桌
const loaderPodium = new GLTFLoader();
let modelPodium;
loaderPodium.load('model/other_models/podium.glb', function (gltf) {

    modelPodium = gltf.scene;
    scene.add(modelPodium);

});

// 模型冷氣機
const loaderAC = new GLTFLoader();
let modelAC;
loaderAC.load('model/ac/AC.glb', function (gltf) {

    modelAC = gltf.scene;
    scene.add(modelAC);

});

// 模型冷氣機頁
const loaderAC2 = new GLTFLoader();
let modelAC2;
loaderAC2.load('model/ac/AC_P2.glb', function (gltf) {

    modelAC2 = gltf.scene;
    scene.add(modelAC2);

});

// 模型吊扇
const loaderFan = new GLTFLoader();
let modelFan;
loaderFan.load('model/fan/FAN.glb', function (gltf) {

    modelFan = gltf.scene;
    scene.add(modelFan);

});

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
    scene.add(modelFanSwitch);

});

// 模型吊扇開關-開
const loaderFanSwitch2 = new GLTFLoader();
let modelFanSwitch2;
loaderFanSwitch2.load('model/fan/SWITCH_NO_MOO_P2.glb', function (gltf) {

    modelFanSwitch2 = gltf.scene;

});

// 模型書
const loaderBook = new GLTFLoader();
let modelBook;
loaderBook.load('model/other_models/BOOK.glb', function (gltf) {

    modelBook = gltf.scene;
    scene.add(modelBook);

});

// 模型靜止椅
const loaderChairNA = new GLTFLoader();
let modelChairNA;
loaderChairNA.load('model/chairs_tables/NO_MOVE_CHAIR.glb', function (gltf) {

    modelChairNA = gltf.scene;
    scene.add(modelChairNA);

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

// 說明欄
const questionArea = window.questionArea;
const words = document.createElement('p');
questionArea.appendChild(words);

// 鼠標hover-出現手手
function onMouseMove(event) {
    // 更新鼠標的位置
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // 更新 Raycaster
    // raycaster.setFromCamera(mouse, camera);

    // 重新計算鼠標懸停的對象
    let intersectsProjectionR = raycaster.intersectObject(modelProjectionR);
    let intersectsChair = raycaster.intersectObject(modelChair);
    let intersectsFanSwitch = raycaster.intersectObject(modelFanSwitch);
    let intersectsTVsc = raycaster.intersectObject(modelTVsc);
    let intersectsChairNA = raycaster.intersectObject(modelChairNA);

    if (intersectsTVsc.length > 0) {
        words.innerHTML = "電視螢幕。";
        // console.log(words);
        document.body.style.cursor = 'pointer';
        questionArea.style.display = 'block';
    } else if (intersectsProjectionR.length > 0) {
        words.innerHTML = "投影機。";
        document.body.style.cursor = 'pointer';
        questionArea.style.display = 'block';
    } else if (intersectsChair.length > 0) {
        words.innerHTML = "會動的椅子。";
        document.body.style.cursor = 'pointer';
        questionArea.style.display = 'block';
    } else if (intersectsFanSwitch.length > 0) {
        words.innerHTML = "電風扇開關。";
        document.body.style.cursor = 'pointer';
        questionArea.style.display = 'block';
    } else if (intersectsChairNA.length > 0) {
        words.innerHTML = "不會動的椅子。";
        document.body.style.cursor = 'pointer';
        questionArea.style.display = 'block';
    } else {
        words.innerHTML = "";
        document.body.style.cursor = 'auto';
        questionArea.style.display = 'none';
    }

}

// 物件被點擊到要做什麼
function onClick(event) {
    // raycaster.setFromCamera(mouse, camera);

    let intersectsProjectionR = raycaster.intersectObject(modelProjectionR);
    let intersectsChair = raycaster.intersectObject(modelChair);
    let intersectsFanSwitch = raycaster.intersectObject(modelFanSwitch);
    let intersectsTVsc = raycaster.intersectObject(modelTVsc);
    let intersectsTVsc2 = raycaster.intersectObject(modelTVsc2);

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
    // let screenMode = 0;
    if (intersectsProjectionR.length > 0) {
        if (mixerScreen) {
            if (!actionScreen.isRunning()) {
                actionScreen.timeScale = 1;
                actionScreen.play();
                actionScreen.setLoop(THREE.LoopOnce);
                actionScreen.clampWhenFinished = true;
                // actionScreen.reset();
            } else {
                actionScreen.timeScale = -1;
                actionScreen.play();
                actionScreen.setLoop(THREE.LoopOnce);
                actionScreen.clampWhenFinished = true;
                actionScreen.reset();
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

    // 創建音訊
    const audioContext = new (window.AudioContext)();
    const soundTV = new Audio('sound/tv_sound.mp3');
    // 電視螢幕切換
    if (intersectsTVsc.length > 0) {
        if (TVclosed) {
            console.log('intersectsTVsc:', intersectsTVsc);
            soundTV.play();
            scene.remove(modelTVsc);
            scene.add(modelTVsc2);
        } else {
            console.log('intersectsTVsc2:', intersectsTVsc2);
            soundTV.play();
            scene.remove(modelTVsc2);
            scene.add(modelTVsc);
        }
        TVclosed = !TVclosed;
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
