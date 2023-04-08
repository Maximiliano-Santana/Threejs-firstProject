import * as THREE from 'three';
import { Light } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Geometrys
const geometry = new THREE.BoxGeometry(1, 1, 1);
const light = new THREE.PointLight(0xffffff, 2, 100);
const light2 = new THREE.PointLight(0xffffff, 1, 100);


const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));
const geometryLine = new THREE.BufferGeometry().setFromPoints(points);


//Materials
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });


//Meshes
const cube = new THREE.Mesh(geometry, material);
const line = new THREE.Line(geometryLine, lineMaterial);


//Scene
scene.add(light);
scene.add(light2);

light.position.set(10, 10, 10);
light2.position.set(-10, -10, -10);

const loader = new GLTFLoader();

loader.load('resources/rosa.glb', function(gltf) {

    scene.add(gltf.scene);
}, undefined, function(error) {
    console.error(error);
});




camera.position.set(0, 10, 15)
camera.lookAt(0, 0, 0);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);



}

animate();