import * as THREE from 'three';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Geometrys
const geometry = new THREE.BoxGeometry(1, 1, 1);

const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));
const geometryLine = new THREE.BufferGeometry().setFromPoints(points);


//Materials
const material = new THREE.MeshBasicMaterial({color:0x00ff00});
const lineMaterial = new THREE.LineBasicMaterial({color: 0x0000ff});


//Meshes
const cube = new THREE.Mesh(geometry, material);
const line = new THREE.Line(geometryLine, lineMaterial);


//Scene
scene.add(cube);
scene.add(line);


camera.position.set(0, 0, 30)
camera.lookAt(0, 0, 0);

function animate (){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
}

animate();