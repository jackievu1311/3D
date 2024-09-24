const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new THREE.GLTFLoader();
const modelUrl = 'https://raw.githubusercontent.com/jackievu1311/3D-model/main/compressed.glb'; // Your model URL

loader.load(modelUrl, (gltf) => {
    scene.add(gltf.scene);
    gltf.scene.position.set(0, 0, 0); // Position your model as needed
}, undefined, (error) => {
    console.error(error);
});

camera.position.z = 5;

const animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
