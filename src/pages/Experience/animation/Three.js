import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import HelvetikerFont from './fonts/helvetiker_regular.typeface.json';

const App = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, 500);

    // const fontLoader = new FontLoader();

    // // fontLoader.load('../fonts/helvetiker_regular.typeface.json', (font) => {
    // // Material
    // // const material = new THREE.MeshMatcapMaterial({ matcap: matcapTexture })
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    // // Text
    // const textGeometry = new TextGeometry('F-Secure', {
    //   font: HelvetikerFont,
    //   size: 0.5,
    //   height: 0.2,
    //   curveSegments: 12,
    //   bevelEnabled: true,
    //   bevelThickness: 0.03,
    //   bevelSize: 0.02,
    //   bevelOffset: 0,
    //   bevelSegments: 5,
    // });
    // textGeometry.center();

    // const text = new THREE.Mesh(textGeometry, material);
    // scene.add(text);
    // // });

    // const sizes = {
    //   width: window.innerWidth,
    //   height: 500,
    // };

    // window.addEventListener('resize', () => {
    //   // Update sizes
    //   sizes.width = window.innerWidth;
    //   sizes.height = 500;

    //   // Update camera
    //   camera.aspect = sizes.width / sizes.height;
    //   camera.updateProjectionMatrix();

    //   // Update renderer
    //   renderer.setSize(sizes.width, sizes.height);
    //   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // });

    // const camera = new THREE.PerspectiveCamera(
    //   75,
    //   sizes.width / sizes.height,
    //   0.1,
    //   100
    // );
    // camera.position.x = 1;
    // camera.position.y = 1;
    // camera.position.z = 2;
    // scene.add(camera);

    // // const controls = new OrbitControls(camera, renderer.domElement);
    // // controls.enableDamping = true;

    // // renderer.setSize(sizes.width, sizes.height);
    // // renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // const clock = new THREE.Clock();
    // mountRef.current.appendChild(renderer.domElement);

    // const tick = () => {
    //   const elapsedTime = clock.getElapsedTime();

    //   // Update controls
    //   // controls.update();

    //   // Render
    //   renderer.render(scene, camera);

    //   // Call tick again on the next frame
    //   window.requestAnimationFrame(tick);
    // };

    // tick();

    mountRef.current.appendChild(renderer.domElement);
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / 500,
      0.1,
      1000
    );

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);
    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    let onWindowResize = function () {
      camera.aspect = window.innerWidth / 500;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, 500);
    };

    window.addEventListener('resize', onWindowResize, false);

    animate();

    return () => mountRef.current.removeChild(renderer.domElement);
  }, []);

  return <div ref={mountRef}></div>;
};

export default App;
