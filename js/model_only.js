import * as THREE from 'three';

import { raycaster, mouse, clock, container, renderer, scene, camera, axesHelper, controls } from './js/basic_set.js';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// 模型牆壁
const loaderWall = new GLTFLoader();
let modelWall;
loaderWall.load('model/MAP.glb', function (gltf) {

    modelWall = gltf.scene;
    modelWall.position.set(0, 0, 0);
    modelWall.scale.set(1, 1, 1);
    scene.add(modelWall);

    animate();

});

// 模型投影機左
const loaderProjectionL = new GLTFLoader();
let modelProjectionL;
loaderProjectionL.load('model/projection/L_projection.glb', function (gltf) {

    modelProjectionL = gltf.scene;
    modelProjectionL.position.set(0, 0, 0);
    modelProjectionL.scale.set(1, 1, 1);
    scene.add(modelProjectionL);

    animate();

});

// 模型椅子跟桌子
const loaderCandT = new GLTFLoader();
let modelCandT;
loaderCandT.load('model/chair_table_01/CHaIR_and_table.glb', function (gltf) {

    modelCandT = gltf.scene;
    modelCandT.position.set(0, 0, 0);
    modelCandT.scale.set(1, 1, 1);
    scene.add(modelCandT);

    animate();

});
