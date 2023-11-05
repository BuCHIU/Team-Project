import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

let mixer;
let light;

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
// const pmremGenerator = new THREE.PMREMGenerator(renderer);

// 場景
const scene = new THREE.Scene();
scene.background = new THREE.Color("rgb(172, 207, 207)");
// scene.environment = pmremGenerator.fromScene(new RoomEnvironment(renderer), 0.04).texture;

// 燈光
light = new THREE.HemisphereLight(0xfcfcfa, 0x3f3f4a, 7);
// light = new THREE.AmbientLight( 0x404040, 50 ); 
// 0x080820 0xffffbb
scene.add(light);

// 攝影機
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 3000);
camera.position.set(750, 130, 130);

// 輔助座標軸
// const axesHelper = new THREE.AxesHelper(1000);
// scene.add(axesHelper);


// 鼠標控制
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 130, 130);
controls.update();


// 模型牆壁
const loaderWall = new GLTFLoader();
let modelWall;
loaderWall.load('model/GRASS.glb', function (gltf) {

    modelWall = gltf.scene;
    scene.add(modelWall);

});

// 模型地板
const loaderFloor = new GLTFLoader();
let modelFloor;
loaderFloor.load('model/fLOOR.glb', function (gltf) {

    modelFloor = gltf.scene;
    scene.add(modelFloor);

});

// 模型人
const loaderFall = new GLTFLoader();
let modelFall;
loaderFall.load('model/other_models/FALL.glb', function (gltf) {

    modelFall = gltf.scene;
    // scene.add(modelFall);

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

// 模型投影機槓槓
const loaderProj = new GLTFLoader();
let modelProj;
loaderProj.load('model/projection/PROOO.glb', function (gltf) {

    modelProj = gltf.scene;
    scene.add(modelProj);

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

// 模型會動椅2
const loaderChair2 = new GLTFLoader();
let modelChair2, mixerChair2, clipChair2, actionChair2;
loaderChair2.load('model/chairs_tables/chair-move.glb', function (gltf) {

    modelChair2 = gltf.scene;
    scene.add(modelChair2);

    // 找到動畫
    clipChair2 = THREE.AnimationClip.findByName(gltf.animations, "chair-move1");
    if (clipChair2) {
        mixerChair2 = new THREE.AnimationMixer(modelChair2);
        actionChair2 = mixerChair2.clipAction(clipChair2);
        actionChair2.play();
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


// 添加音訊
// 追蹤音訊播放狀態
let audioPlaying = false;
const listener = new THREE.AudioListener();
camera.add(listener);
const audioLoader = new THREE.AudioLoader();
const sound = new THREE.PositionalAudio(listener);

audioLoader.load('sound/The Trapezist - Quincas Moreira.mp3', function (buffer) {
    sound.setBuffer(buffer);
    sound.setRefDistance(1000); // 設置聲音最遠可聽距離
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

// 模型冷氣葉片
const loaderAC2 = new GLTFLoader();
let modelAC2, actionsAC2, mixerAC2;
let clipsAC2 = [];
loaderAC2.load('model/ac/ac_P22.glb', function (gltf) {

    modelAC2 = gltf.scene;
    scene.add(modelAC2);

    // 找到動畫
    clipsAC2 = gltf.animations;
    mixerAC2 = new THREE.AnimationMixer(modelAC2);
    actionsAC2 = [];

    // 創建並播放每個 AnimationClip
    for (let i = 0; i < clipsAC2.length; i++) {
        const actionAC2 = mixerAC2.clipAction(clipsAC2[i]);
        actionAC2.stop();
        actionsAC2.push(actionAC2);
    }
});

// 模型會動白板
const loaderWBM = new GLTFLoader();
let modelWBM, clipWBM, actionWBM, mixerWBM;
loaderWBM.load('model/other_models/board-move.glb', function (gltf) {
    modelWBM = gltf.scene;
    scene.add(modelWBM);

    // 找到動畫
    clipWBM = THREE.AnimationClip.findByName(gltf.animations, "white-board-move");
    if (clipWBM) {
        mixerWBM = new THREE.AnimationMixer(modelWBM);
        actionWBM = mixerWBM.clipAction(clipWBM);
    }
});

// 模型冷氣遙控器
const loaderACC = new GLTFLoader();
let modelACC;
loaderACC.load('model/ac/AIR-CONTROL.glb', function (gltf) {

    modelACC = gltf.scene;
    scene.add(modelACC);

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

// 模型會動人
const loaderFall2 = new GLTFLoader();
let modelFall2, mixerFall2, actionsFall2;
let clipsFall2 = [];
loaderFall2.load('model/other_models/FALLANINI.glb', function (gltf) {

    modelFall2 = gltf.scene;
    scene.add(modelFall2);

    // 找到動畫
    clipsFall2 = gltf.animations;
    mixerFall2 = new THREE.AnimationMixer(modelFall2);
    // 初始化數組
    actionsFall2 = [];

    // 創建並播放每個 AnimationClip
    for (let i = 0; i < clipsFall2.length; i++) {
        const action = mixerFall2.clipAction(clipsFall2[i]);
        action.play();
        actionsFall2.push(action);
    }

});

// 模型翻頁書
const loaderBookA1 = new GLTFLoader();
let modelBookA1, mixerBookA1, actionsBookA1;
let clipsBookA1 = [];
loaderBookA1.load('model/other_models/BOOK-rig-animation.glb', function (gltf) {

    modelBookA1 = gltf.scene;
    scene.add(modelBookA1);

    // 找到動畫
    clipsBookA1 = gltf.animations;
    mixerBookA1 = new THREE.AnimationMixer(modelBookA1);
    // 初始化數組
    actionsBookA1 = [];

    // 創建並播放每個 AnimationClip
    for (let i = 0; i < clipsBookA1.length; i++) {
        const action = mixerBookA1.clipAction(clipsBookA1[i]);
        action.play();
        actionsBookA1.push(action);
    }

});

// 模型會動書2
const loaderBookA2 = new GLTFLoader();
let modelBookA2, clipBookA2, actionBookA2, mixerBookA2;
loaderBookA2.load('model/other_models/book-float-new.glb', function (gltf) {

    modelBookA2 = gltf.scene;
    modelBookA2.position.set( 0, 0, 18);
    scene.add(modelBookA2);

    console.log(gltf);

    // 找到動畫
    clipBookA2 = THREE.AnimationClip.findByName(gltf.animations, "BOOK-floatAction");
    if (clipBookA2) {
        mixerBookA2 = new THREE.AnimationMixer(modelBookA2);
        actionBookA2 = mixerBookA2.clipAction(clipBookA2);
    }
    actionBookA2.play();
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

// 模型電燈開關-關
const loaderLightSwitch = new GLTFLoader();
let modelLightSwitch;
loaderLightSwitch.load('model/light/SWITCH_LIGHT.glb', function (gltf) {

    modelLightSwitch = gltf.scene;
    scene.add(modelLightSwitch);

});

// 模型電燈開關-開
const loaderLightSwitch2 = new GLTFLoader();
let modelLightSwitch2;
loaderLightSwitch2.load('model/light/SWITCH_LIGHT_P2.glb', function (gltf) {

    modelLightSwitch2 = gltf.scene;

});

let lightClosed = true;
// 模型電燈座
const loaderLight = new GLTFLoader();
let modelLight;
loaderLight.load('model/light/LIGHT.glb', function (gltf) {

    modelLight = gltf.scene;
    scene.add(modelLight);

});

// 模型電燈泡本身-暗
const loaderLightOFF = new GLTFLoader();
let modelLightOFF;
loaderLightOFF.load('model/light/LIGHT_P2.glb', function (gltf) {

    modelLightOFF = gltf.scene;
    scene.add(modelLightOFF);

});

// 模型電燈泡本身-亮
const loaderLightON = new GLTFLoader();
let modelLightON;
loaderLightON.load('model/light/LIGHT_P2_ON.glb', function (gltf) {

    modelLightON = gltf.scene;
    // scene.add(modelLightON);

});

// 模型書
const loaderBook = new GLTFLoader();
let modelBook;
loaderBook.load('model/other_models/BOOK.glb', function (gltf) {

    modelBook = gltf.scene;
    scene.add(modelBook);

});

// 模型其他雜物-不會動
const loaderOtherNA = new GLTFLoader();
let modelOtherNA
loaderOtherNA.load('model/other_models/PROPNOMOVE.glb', function (gltf) {

    modelOtherNA = gltf.scene;
    modelOtherNA.children[0].visible = false;
    scene.add(modelOtherNA);

});

// 模型其他雜物-會動
const loaderOtherA = new GLTFLoader();
let modelOtherA, mixerOtherA, actionsOtherA;
let clipsOtherA = [];
loaderOtherA.load('model/other_models/PROPMOVE.glb', function (gltf) {

    modelOtherA = gltf.scene;
    scene.add(modelOtherA);
    
    // 找到動畫
    clipsOtherA = gltf.animations;
    mixerOtherA = new THREE.AnimationMixer(modelOtherA);
    // 初始化數組
    actionsOtherA = [];

    // 創建並播放每個 AnimationClip
    for (let i = 0; i < clipsOtherA.length; i++) {
        const action = mixerOtherA.clipAction(clipsOtherA[i]);
        action.play();
        actionsOtherA.push(action);
    }
});

// 模型講桌椅
const loaderPod_chair = new GLTFLoader();
let modelPod_chair;
loaderPod_chair.load('model/other_models/podium_chair.glb', function (gltf) {

    modelPod_chair = gltf.scene;
    scene.add(modelPod_chair);

});

// 模型靜止椅
const loaderChairNA = new GLTFLoader();
let modelChairNA;
loaderChairNA.load('model/chairs_tables/NO_MOVE_CHAIR.glb', function (gltf) {

    modelChairNA = gltf.scene;
    scene.add(modelChairNA);

});

// 模型白板
const loaderWB = new GLTFLoader();
let modelWB;
loaderWB.load('model/other_models/white_board.glb', function (gltf) {

    modelWB = gltf.scene;
    scene.add(modelWB);

});

// 模型帽子
// 帽子初始狀態：可視
let hatVisible = true;
const loaderHat = new GLTFLoader();
let modelHat;
loaderHat.load('model/other_models/HAT.glb', function (gltf) {

    modelHat = gltf.scene;
    scene.add(modelHat);

});

// 模型椅子跟桌子(全)
const loaderCandTall = new GLTFLoader();
let modelCandTall;
loaderCandTall.load('model/chairs_tables/TABLE_AND_CHAIR.glb', function (gltf) {

    modelCandTall = gltf.scene;
    scene.add(modelCandTall);

    const loading = document.querySelector('.container2');
    loading.classList.add('hide');

},
    function (load) {
        const percent = load.loaded / load.total;
        const loading_text = window.getComputedStyle(document.querySelector('.loader'), '::before');
        // .getPropertyValue('content');
        const loading_fill = document.querySelector('.line');

        // loading_text.width = percent * 5 + "px";
        loading_fill.style.width = percent * 100 + "%";
    }
);

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
    let intersectsChair2 = raycaster.intersectObject(modelChair2);
    let intersectsFanSwitch = raycaster.intersectObject(modelFanSwitch);
    let intersectsTVsc = raycaster.intersectObject(modelTVsc);
    let intersectsChairNA = raycaster.intersectObject(modelChairNA);
    let intersectsBook = raycaster.intersectObject(modelBook);
    let intersectsBookA1 = raycaster.intersectObject(modelBookA1);
    let intersectsBookA2 = raycaster.intersectObject(modelBookA2);
    let intersectsClock = raycaster.intersectObject(modelClock);
    let intersectsPodium = raycaster.intersectObject(modelPodium);
    let intersectsSpeaker = raycaster.intersectObject(modelSpeaker);
    let intersectsScreen = raycaster.intersectObject(modelScreen);
    let intersectsACC = raycaster.intersectObject(modelACC);
    let intersectsWBM = raycaster.intersectObject(modelWBM);
    let intersectsLightSwitch = raycaster.intersectObject(modelLightSwitch);
    let intersectsHat2 = raycaster.intersectObject(modelOtherA.children[0]);
    let intersectsRedTea = raycaster.intersectObject(modelOtherA.children[1]);
    let intersectsPen = raycaster.intersectObject(modelOtherA.children[2]);
    let intersectsHat = raycaster.intersectObject(modelHat);
    let intersectsChicken = raycaster.intersectObject(modelOtherNA.children[2]);
    let intersectsNameBoard = raycaster.intersectObject(modelOtherNA.children[3]);
    let intersectsMBA = raycaster.intersectObject(modelOtherNA.children[4]);
    
    // console.log(modelOtherA.children);

    if (intersectsTVsc.length > 0 && TVclosed == true) {
        words.innerHTML = `
        <div class="words-p pp">
            <img src="./img/how_to_work/cursor_3.png" alt="可點擊" class="clickable-icon">電視螢幕。
        </div>`;
        // console.log(words);
        document.body.style.cursor = 'pointer';
        questionArea.style.display = 'flex';
    } else if (intersectsTVsc.length > 0 && TVclosed == false) {
        words.innerHTML = `
        <div class="words-p pp">
            <img src="./img/how_to_work/cursor_3.png" alt="可點擊" class="clickable-icon">教室平面圖。    
        </div>`;
        document.body.style.cursor = 'pointer';
        questionArea.style.display = 'flex';
    } else if (intersectsProjectionR.length > 0) {
        words.innerHTML = `
        <div class="words-p pp">
            <img src="./img/how_to_work/cursor_3.png" alt="可點擊" class="clickable-icon">投影機。
        </div>`;
        document.body.style.cursor = 'pointer';
        questionArea.style.display = 'flex';
    } else if (intersectsChair.length > 0) {
        words.innerHTML = `
        <div class="words-p pp">
            <img src="./img/how_to_work/cursor_3.png" alt="可點擊" class="clickable-icon">會動的椅子。
        </div>`;
        document.body.style.cursor = 'pointer';
        questionArea.style.display = 'flex';
    } else if (intersectsChair2.length > 0) {
        words.innerHTML = `<div class="words-p pp">
        有自我意識的椅子。
        </div>`;
        document.body.style.cursor = 'pointer';
        questionArea.style.display = 'flex';
    } else if (intersectsFanSwitch.length > 0) {
        words.innerHTML = `
        <div class="words-p pp">
            <img src="./img/how_to_work/cursor_3.png" alt="可點擊" class="clickable-icon">電風扇開關。
        </div>`;
        document.body.style.cursor = 'pointer';
        questionArea.style.display = 'flex';
    } else if (intersectsLightSwitch.length > 0) {
        words.innerHTML = `<div class="words-p pp">
            <img src="./img/how_to_work/cursor_3.png" alt="可點擊" class="clickable-icon">電燈開關。
        </div>`;
        document.body.style.cursor = 'pointer';
        questionArea.style.display = 'flex';
    } else if (intersectsChairNA.length > 0) {
        words.innerHTML = `<div class="words-p pp">
        不會動的椅子。
        </div>`;
        document.body.style.cursor = 'pointer';
        questionArea.style.display = 'flex';
    } else if (intersectsBook.length > 0) {
        words.innerHTML = `
        <div class="words-p pp">
        Never gonna give you up ~
        </div>`;
        document.body.style.cursor = 'pointer';
        questionArea.style.display = 'flex';
    } else if (intersectsBookA1.length > 0) {
        words.innerHTML = `
        <div class="words-p pp">
        好像有人在看書...
        </div>`;
        document.body.style.cursor = 'pointer';
        questionArea.style.display = 'flex';
    } else if (intersectsBookA2.length > 0) {
        words.innerHTML = `
        <div class="words-p pp">
        輕飄飄～
        </div>`;
        document.body.style.cursor = 'pointer';
        questionArea.style.display = 'flex';
    } else if (intersectsHat.length > 0) {
        words.innerHTML = `<div class="words-p pp">
            <img src="./img/how_to_work/cursor_3.png" alt="可點擊" class="clickable-icon">精靈的帽子。
        </div>`;
        document.body.style.cursor = 'pointer';
        questionArea.style.display = 'flex';
    } else if (intersectsClock.length > 0) {
        words.innerHTML = `<div class="words-p pp">
        時空錯亂的時鐘。
        </div>`;
        document.body.style.cursor = 'pointer';
        questionArea.style.display = 'flex';
    } else if (intersectsPodium.length > 0) {
        words.innerHTML = `
        <div class="words-p pp">
            <img src="./img/how_to_work/cursor_3.png" alt="可點擊" class="clickable-icon">講桌。
        </div>`;
        document.body.style.cursor = 'pointer';
        questionArea.style.display = 'flex';
    } else if (intersectsSpeaker.length > 0) {
        words.innerHTML = `
        <div class="words-p pp">
            <img src="./img/how_to_work/cursor_3.png" alt="可點擊" class="clickable-icon">音響。
        </div>`;
        document.body.style.cursor = 'pointer';
        questionArea.style.display = 'flex';
    } else if (intersectsScreen.length > 0) {
        words.innerHTML = `
        <div class="words-p pp">
            <img src="./img/how_to_work/cursor_3.png" alt="可點擊" class="clickable-icon">投影幕
        </div>`;
        document.body.style.cursor = 'pointer';
        questionArea.style.display = 'flex';
    } else if (intersectsACC.length > 0) {
        words.innerHTML = `<div class="words-p pp">
            <img src="./img/how_to_work/cursor_3.png" alt="可點擊" class="clickable-icon">冷氣遙控器。
        </div>`;
        document.body.style.cursor = 'pointer';
        questionArea.style.display = 'flex';
    } else if (intersectsWBM.length > 0) {
        words.innerHTML = `
        <div class="words-p pp">
            <img src="./img/how_to_work/cursor_3.png" alt="可點擊" class="clickable-icon">
            會動的白板。
        </div>`;
        document.body.style.cursor = 'pointer';
        questionArea.style.display = 'flex';
    } else if (intersectsHat2.length > 0) {
        words.innerHTML = `
        <div class="words-p pp">
            巫師帽！
        </div>`;
        document.body.style.cursor = 'pointer';
        questionArea.style.display = 'flex';
    } else if (intersectsRedTea.length > 0) {
        words.innerHTML = `
        <div class="words-p pp">
            其實有加珍珠的紅茶。
        </div>`;
        document.body.style.cursor = 'pointer';
        questionArea.style.display = 'flex';
    } else if (intersectsPen.length > 0) {
        words.innerHTML = `
        <div class="words-p pp">
            簽名用原子筆。
        </div>`;
        document.body.style.cursor = 'pointer';
        questionArea.style.display = 'flex';
    } else if (intersectsMBA.length > 0) {
        words.innerHTML = `
        <div class="words-p pp">
            同學的 MacBook Air。
        </div>`;
        document.body.style.cursor = 'pointer';
        questionArea.style.display = 'flex';
    } else if (intersectsChicken.length > 0) {
        words.innerHTML = `<div class="words-p pp">
        超派～
        </div>`;
        document.body.style.cursor = 'pointer';
        questionArea.style.display = 'flex';
    } else if (intersectsNameBoard.length > 0) {
        words.innerHTML = `
        <div class="words-p ppp">
            簽到簽退板。
            （勞動部－產業尖兵訓練，參訓期間相當重要的道具。）
        </div>`;
        document.body.style.cursor = 'pointer';
        questionArea.style.display = 'flex';
    } else {
        words.innerHTML = "";
        document.body.style.cursor = 'auto';
        questionArea.style.display = 'none';
    }

}

// 影像區
const proScreen = window.proscreen;
const closeBtn = window.closebtn;
let screenPC = document.querySelector('.pc');
let closeBtnPC = document.querySelector('.pc-close');

let chairplay = true;
let screenplay = true;
// 物件被點擊到要做什麼
function onClick(event) {
    // raycaster.setFromCamera(mouse, camera);

    let intersectsProjectionR = raycaster.intersectObject(modelProjectionR);
    let intersectsFloor = raycaster.intersectObject(modelFloor);
    let intersectsChair = raycaster.intersectObject(modelChair);
    let intersectsFanSwitch = raycaster.intersectObject(modelFanSwitch);
    let intersectsTVsc = raycaster.intersectObject(modelTVsc);
    let intersectsHat = raycaster.intersectObject(modelHat);
    let intersectsPodium = raycaster.intersectObject(modelPodium);
    let intersectsSpeaker = raycaster.intersectObject(modelSpeaker);
    let intersectsScreen = raycaster.intersectObject(modelScreen);
    let intersectsACC = raycaster.intersectObject(modelACC);
    let intersectsWBM = raycaster.intersectObject(modelWBM);
    let intersectsLightSwitch = raycaster.intersectObject(modelLightSwitch);

    // 地板變顏色
    // if (intersectsFloor.length > 0) {
    //     let colors = [0x8f534f, 0x2f4175, 0x7f5d94, 0xba505c];
    //     // let indexColor = 0;
    //     let random = colors[Math.floor(Math.random() * 4)];

    //     let newMaterial = new THREE.MeshStandardMaterial({
    //         color: random,
    //         emissive: random,
    //         roughness: 0.6,
    //         metalness: 0.1
    //     });

    //     // intersectsFloor.forEach(object => {
    //     //     console.log(object);
    //     //     object.object.material = newMaterial;
    //     // })
    //     intersectsFloor[0].object.material = newMaterial;
    // }

    // 椅子播放動畫
    if (intersectsChair.length > 0) {
        if (mixerChair) {
            if (chairplay) {
                actionChair.timeScale = 1;
                actionChair.play();
                actionChair.setLoop(THREE.LoopOnce);
                actionChair.clampWhenFinished = true;
                actionChair.reset();
                chairplay = false;
            } else {
                actionChair.timeScale = -1;
                actionChair.paused = false;
                chairplay = true;
            }
        }
    }

    // 投影布幕降下來
    // let screenMode = 0;
    if (intersectsProjectionR.length > 0) {
        if (mixerScreen) {
            if (screenplay) {
                actionScreen.timeScale = 1;
                actionScreen.play();
                actionScreen.setLoop(THREE.LoopOnce);
                actionScreen.clampWhenFinished = true;
                actionScreen.reset();
                screenplay = false;
            } else {
                actionScreen.timeScale = -1;
                actionScreen.paused = false;
                screenplay = true;
            }
        }
    }

    // 創建音訊
    const soundFan = new Audio('sound/tv_sound.mp3');
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
                    soundFan.play();
                } else {
                    scene.remove(modelFanSwitch);
                    scene.add(modelFanSwitch2);
                    action.play();
                    soundFan.play();
                }
            });

            if (!isAnyFanRunning) {
                // 默認播放第一個動畫
                actionsFanBlade[0].play();
            }
        }
    }

    // 創建音訊
    const soundTV = new Audio('sound/tv_sound.mp3');
    // 電視螢幕切換
    if (intersectsTVsc.length > 0) {
        if (TVclosed) {
            soundTV.play();
            scene.remove(modelTVsc);
            scene.add(modelTVsc2);
        } else {
            soundTV.play();
            scene.remove(modelTVsc2);
            scene.add(modelTVsc);
        }
        TVclosed = !TVclosed;
    }

    // 創建音訊
    const soundLight = new Audio('sound/tv_sound.mp3');
    // 電燈打開
    if (intersectsLightSwitch.length > 0) {
        if (lightClosed) {
            soundLight.play();
            scene.remove(modelLightSwitch);
            scene.remove(modelLightOFF);
            scene.add(modelLightSwitch2);
            scene.add(modelLightON);
        } else {
            soundLight.play();
            scene.remove(modelLightSwitch2);
            scene.remove(modelLightON);
            scene.add(modelLightSwitch);
            scene.add(modelLightOFF);
        }
        lightClosed = !lightClosed;
    }

    // 精靈帽子消失出現
    if (intersectsHat.length > 0) {
        if (hatVisible) {
            scene.remove(modelHat);
        } else {
            scene.add(modelHat);
        }
        hatVisible = !hatVisible;
    }

    // 音響播放音訊
    if (intersectsSpeaker.length > 0) {
        if (audioPlaying) {
            sound.pause();
            audioPlaying = false;
        } else {
            sound.play();
            audioPlaying = true;
        }
    }

    // 講桌放⋯⋯輪播照片
    if (intersectsPodium.length > 0) {
        screenPC.style.display = 'block';
        // 講桌桌面-點擊logo
        const pcLogo = document.querySelector('.pc-logo');
        const pcSlide = document.querySelector('#carouselExampleIndicators');
        const pcSlideClose = document.querySelector('.close-slide');
        pcLogo.addEventListener('click', () => {
            pcSlide.classList.remove("disappear");
            pcSlideClose.addEventListener('click', () => {
                pcSlide.classList.add("disappear");
            })
        })

        closeBtnPC.addEventListener('click', () => {
            screenPC.style.display = 'none';
        })
    }

    // 投影幕放⋯⋯教室介紹
    if (intersectsScreen.length > 0) {
        proScreen.style.display = 'block';
        closeBtn.addEventListener('click', () => {
            proScreen.style.display = 'none';
        })
    }

    // 創建音訊
    const soundAC = new Audio('sound/turn_on_the_ac.mp3');
    // 按冷氣遙控開啟冷氣
    if (intersectsACC.length > 0) {
        if (mixerAC2) {
            let isAnyACRunning = false;
            actionsAC2.forEach(action => {
                if (action.isRunning()) {
                    isAnyACRunning = true;
                    action.stop();
                    soundAC.play();
                } else {
                    action.play();
                    soundAC.play();
                }
            });
        }
    }

    // 白板會動
    if (intersectsWBM.length > 0) {
        // 檢查動畫狀態
        if (mixerWBM) {
            if (actionWBM.isRunning()) {
                actionWBM.stop();
            } else {
                actionWBM.play();
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

    if (modelChair2 && mixerChair2) {
        mixerChair2.update(delta);
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

    if (modelAC2 && mixerAC2) {
        mixerAC2.update(delta);
    }

    if (modelWBM && mixerWBM) {
        mixerWBM.update(delta);
    }
    
    if (modelFall2 && mixerFall2) {
        mixerFall2.update(delta);
    }
    
    if (modelOtherA && mixerOtherA) {
        mixerOtherA.update(delta);
    }
    
    if (modelBookA1 && mixerBookA1) {
        mixerBookA1.update(delta);
    }
    
    if (modelBookA2 && mixerBookA2) {
        mixerBookA2.update(delta);
    }

    controls.update();

    camera.updateProjectionMatrix();

    raycaster.setFromCamera(mouse, camera);
    renderer.render(scene, camera);

}


animate();
