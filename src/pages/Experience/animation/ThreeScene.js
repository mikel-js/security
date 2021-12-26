import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const App = () => {
  const mountRef = useRef(null);
  const width = window.visualViewport.width - 200;

  useEffect(() => {
    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x19156c);

    renderer.setSize(width, 500);

    mountRef.current.appendChild(renderer.domElement);
    const camera = new THREE.PerspectiveCamera(75, width / 500, 0.1, 100);
    camera.position.x = 1;
    camera.position.y = 1;
    camera.position.z = 2;
    scene.add(camera);

    const fontLoader = new FontLoader();

    fontLoader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
      const textGeometry = new TextGeometry('F-Sure', {
        font: font,
        size: 0.5,
        height: 0.2,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0,
        bevelSize: 0,
        bevelOffset: 0,
        bevelSegments: 5,
      });
      textGeometry.center();
      const material = new THREE.MeshBasicMaterial({ color: 0xef3705 });
      const text = new THREE.Mesh(textGeometry, material);
      scene.add(text);

      renderer.render(scene, camera);
    });

    let onWindowResize = function () {
      camera.aspect = width / 500;
      camera.updateProjectionMatrix();
      renderer.setSize(width, 500);
    };

    window.addEventListener('resize', onWindowResize, false);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const tick = () => {
      controls.update();

      renderer.render(scene, camera);

      window.requestAnimationFrame(tick);
    };

    tick();

    return () => mountRef.current.removeChild(renderer.domElement);
  }, []);

  return <div ref={mountRef}></div>;
};

export default App;
