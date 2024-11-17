//import threejs and any addons
import * as THREE from './three.module.min.js';
import { FontLoader } from './FontLoader.js';
import { TextGeometry } from './TextGeometry.js';
import { OrbitControls } from './OrbitControls.js';

//SCENE, CAMERA, RENDERER
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(90, window.innerWidth /
    window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

//controls.update() must be called after any manual changes to the camera's transform
camera.position.set(30, 120, 200);
camera.lookAt(0, 0, 0);

//OBJECTS
//scene.add(new THREE.GridHelper(10, 10));

const loader = new FontLoader();
let textMesh;
function createText(content, size, depth, color, roughness, metalness) {

    loader.load('./helvetiker_regular.typeface.json', function (font) {
        const textGeometry = new TextGeometry(content, {
            font: font,
            size: size,
            depth: depth,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 10,
            bevelSize: 5,
            bevelOffset: 0,
            bevelSegments: 12
        });

        textGeometry.center();

        //material, mesh
        const textMaterial = new THREE.MeshStandardMaterial({
            color: color,
            roughness: roughness,
            metalness: metalness
        });

        //Remove existing textMesh if it exists
        if (textMesh) {
            scene.remove(textMesh);
        }
        textMesh = new THREE.Mesh(textGeometry, textMaterial);
        scene.add(textMesh);
    });
}

createText('HI');

function updateText() {
    const userText = document.getElementById('textInput').value || 'HI';
    const userSize = parseFloat(document.getElementById('sizeInput').value) || 50;
    const userDepth = parseFloat(document.getElementById('depthInput').value);
    const userColor = document.getElementById('colorInput').value || '#ffffff';
    const userRoughness = parseFloat(document.getElementById('roughnessInput').value);
    const userMetalness = parseFloat(document.getElementById('metalnessInput').value);
    createText(userText, userSize, userDepth, userColor, userRoughness, userMetalness);
}

function setupSlider(inputId, outPutId) {
    document.getElementById(inputId).addEventListener('input', function (event) {
        document.getElementById(outPutId).textContent = event.target.value;
    });
}


setupSlider('roughnessInput', 'roughnessValue');
setupSlider('metalnessInput', 'metalnessValue');
setupSlider('depthInput', 'depthValue');
setupSlider('sizeInput', 'sizeValue');

document.getElementById('textInput').addEventListener('input', updateText);
document.getElementById('sizeInput').addEventListener('input', updateText);
document.getElementById('depthInput').addEventListener('input', updateText);
document.getElementById('colorInput').addEventListener('input', updateText);
document.getElementById('roughnessInput').addEventListener('input', updateText);
document.getElementById('metalnessInput').addEventListener('input', updateText);

const dl = new THREE.DirectionalLight(0xffffff, 5);
dl.position.set(10, 15, 20);
scene.add(dl);
const dl1 = new THREE.DirectionalLight(0xffffff, 2);
dl1.position.set(-10, 5, -20);
scene.add(dl1);

//Add animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();
