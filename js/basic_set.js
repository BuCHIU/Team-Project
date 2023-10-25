import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

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
scene.background = new THREE.Color("rgb(154, 192, 252)");
scene.environment = pmremGenerator.fromScene(new RoomEnvironment(renderer), 0.04).texture;

// 攝影機
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 3000);
camera.position.set(1200, 400, 150);

// 輔助座標軸
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

// 鼠標控制
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(1, 1, 1);
controls.update();

export { raycaster, mouse, clock, container, renderer, scene, camera, axesHelper, controls };

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);