import * as THREE from 'three';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import { raycaster, mouse, clock, container, renderer, scene, camera, controls } from './js/basic_set.js';

let mixer;

// 動畫初始狀態
let screenIsAnimating = false;
// 模型投影幕
const loaderScreen = new GLTFLoader();
let modelScreen, mixerScreen, clipScreen, actionScreen;
loaderScreen.load('model/projection/projection_screen.glb', function (gltf) {
    // console.log(gltf);

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

    animate();

});

// 模型投影機右
const loaderProjectionR = new GLTFLoader();
let modelProjectionR;
loaderProjectionR.load('model/projection/R_projection.glb', function (gltf) {

    modelProjectionR = gltf.scene;
    modelProjectionR.position.set(0, 0, 0);
    modelProjectionR.scale.set(1, 1, 1);
    scene.add(modelProjectionR);

    animate();

});

// 動畫初始狀態
let chairIsAnimating = false;
// 動畫已經播放了嗎
let chairAnimationPlayed = false;
// 動畫當前-順播/（逆播）
let chairAnimationForward = true;
// 模型會動椅
const loaderChair = new GLTFLoader();
let modelChair, mixerChair, clipChair, actionChair;
loaderChair.load('model/chair_table_01/CHaIR_ani.glb', function (gltf) {
    console.log(gltf.animations);

    modelChair = gltf.scene;
    modelChair.position.set(0, 0, 0);
    modelChair.scale.set(1, 1, 1);
    scene.add(modelChair);

    // 找到動畫
    clipChair = THREE.AnimationClip.findByName(gltf.animations, "CHAIR_ANI");
    if (clipChair) {
        mixerChair = new THREE.AnimationMixer(modelChair);
        actionChair = mixerChair.clipAction(clipChair);
        actionChair.paused = true;

        animate();
    }

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

    if (intersectsProjectionR.length > 0 || intersectsChair.length > 0) {
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

    // 椅子播放或停止動畫
    if (intersectsChair.length > 0) {
        if (mixerChair) {
            if (actionChair.isRunning()) {
                actionChair.stop();
            } else {
                actionChair.play();
            }
        }
    }

    // 投影布幕降下來
    if (intersectsProjectionR.length > 0) {
        if (mixerScreen) {
            if (actionScreen.isRunning()) {
                actionScreen.stop();
            } else {
                actionScreen.play();
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

    controls.update();

    raycaster.setFromCamera(mouse, camera);
    renderer.render(scene, camera);

}


animate();