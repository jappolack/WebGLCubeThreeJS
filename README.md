# WebGLCubeThreeJS
Three.js Rotating Cube

A small Three.js demo that renders a colored cube and continuously rotates it around the X and Y axes.

Run

Open index.html in a modern browser.

Because the project uses JavaScript modules, it is recommended to run it from a local web server.

For example:

python3 -m http.server 8000


Then visit:

http://localhost:8000/index.html

Controls

There are no controls.

The cube starts rotating automatically when the page loads.

How It Works

index.html provides a full-window page and loads the Three.js application.

cube.js imports the Three.js library and creates the scene, camera, renderer, and cube.

A Scene object serves as the virtual world that contains all 3D objects.

A PerspectiveCamera creates realistic depth where distant objects appear smaller.

BoxGeometry generates the cube geometry automatically.

MeshNormalMaterial colors the cube faces based on their surface normals, making the rotation easy to observe.

A Mesh combines the geometry and material into a renderable object.

The cube is added to the scene using:

scene.add(cube);

The animation loop continuously updates the cube's rotation:
cube.rotation.x += 0.01;
cube.rotation.y += 0.01;

requestAnimationFrame() redraws the scene approximately 60 times per second.
Requirements

A modern browser with WebGL enabled.

Internet access to load the Three.js library from the CDN.

No build tools or package installation required.

Raw WebGL vs Three.js

This project demonstrates one of the major advantages of Three.js.

Raw WebGL Cube

Requires:

Vertex shaders
Fragment shaders
Vertex buffers
Color buffers
Index buffers
Matrix calculations
GPU attribute bindings
Uniform uploads
Rendering state management

Typically over 200 lines of code.

Three.js Cube

Requires only:

const geometry = new THREE.BoxGeometry();

const material = new THREE.MeshNormalMaterial();

const cube = new THREE.Mesh(
    geometry,
    material
);

scene.add(cube);


Three.js handles the low-level WebGL details behind the scenes, allowing developers to focus on building 3D applications rather than managing GPU resources directly.
