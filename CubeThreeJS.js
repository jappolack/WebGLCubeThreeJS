import * as THREE from "https://unpkg.com/three@0.167.1/build/three.module.js";

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

// Camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

document.body.appendChild(
    renderer.domElement
);

// Geometry
const geometry = new THREE.BoxGeometry(
    2,
    2,
    2
);

// Give each cube face a different rainbow color.
const faceColors = [];
const positionValues = geometry.attributes.position.array;

for (let faceIndex = 0; faceIndex < 6; faceIndex++) {
    const transitionAxis = faceIndex < 2 ? 1 : faceIndex < 4 ? 2 : 0;

    for (let vertexIndex = 0; vertexIndex < 6; vertexIndex++) {
        const positionIndex = (faceIndex * 6 + vertexIndex) * 3;
        const transition = (positionValues[positionIndex + transitionAxis] + 1) / 2;
        const color = new THREE.Color().setHSL(
            (faceIndex + transition * 2) / 6,
            1,
            0.5
        );

        faceColors.push(color.r, color.g, color.b);
    }
}

geometry.setAttribute(
    "color",
    new THREE.Float32BufferAttribute(faceColors, 3)
);

// Material
const material = new THREE.MeshBasicMaterial({
    vertexColors: true
});

// Cube
const cube = new THREE.Mesh(
    geometry,
    material
);

scene.add(cube);

// Animation Loop
function animate() {

    requestAnimationFrame(
        animate
    );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(
        scene,
        camera
    );
}

animate();

// Handle Window Resize
window.addEventListener(
    "resize",
    () => {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );
    }
);