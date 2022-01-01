import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const App = ({ darkMode }) => {
  const mountRef = useRef(null);
  const showLight = !darkMode;
  const width = window.visualViewport.width - 200;

  useEffect(() => {
    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, 500);
    renderer.shadowMap.enabled = true;

    mountRef.current.appendChild(renderer.domElement);
    const camera = new THREE.PerspectiveCamera(75, width / 500, 0.1, 100);
    camera.position.x = 1;
    camera.position.y = 1;
    camera.position.z = 3;
    camera.lookAt(scene.position);
    scene.add(camera);

    const fontLoader = new FontLoader();

    fontLoader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
      const textGeometry = new TextGeometry('F-Security', {
        font: font,
        size: 0.7,
        height: 0.2,
        curveSegments: 12,
        bevelEnabled: false,
        bevelThickness: 0,
        bevelSize: 0,
        bevelOffset: 0,
        bevelSegments: 5,
      });
      textGeometry.center();
      const material = new THREE.MeshStandardMaterial();
      const text = new THREE.Mesh(textGeometry, material);
      text.position.y = 0.5;
      text.castShadow = true;
      scene.add(text);
      renderer.render(scene, camera);
    });

    const ambientLight = new THREE.AmbientLight();
    ambientLight.color = new THREE.Color(0xffffff);
    ambientLight.intensity = 0.8;

    const directionalLight = new THREE.DirectionalLight(0x000099, 1);
    directionalLight.position.set(1, -0.5, 2);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xff9000, 1);
    pointLight.position.set(-2, 3, 4);
    pointLight.castShadow = true;

    const rectAreaLight = new THREE.RectAreaLight(0x000099, 2, 1, 1);
    rectAreaLight.position.set(-1.5, 0, 1.5);
    rectAreaLight.lookAt(new THREE.Vector3());

    const moonLight = new THREE.DirectionalLight('#b9d5ff', 0.12);
    moonLight.castShadow = true;
    moonLight.shadow.mapSize.width = 256;
    moonLight.shadow.mapSize.height = 256;
    moonLight.shadow.camera.far = 15;
    moonLight.position.set(4, 5, -2);

    const fog = new THREE.Fog('#b3b3b3', 1, 15);

    let onWindowResize = function () {
      camera.aspect = width / 500;
      camera.updateProjectionMatrix();
      renderer.setSize(width, 500);
    };

    const textureLoader = new THREE.TextureLoader();

    const snowColor = textureLoader.load('/textures/snow/color.jpg');
    const snowAmbientOcclusion = textureLoader.load(
      '/textures/snow/occlusion.jpg'
    );
    const snowNormal = textureLoader.load('/textures/snow/normal.jpg');
    const snowRoughness = textureLoader.load('/textures/snow/roughness.jpg');

    const floor = new THREE.Mesh(
      new THREE.PlaneBufferGeometry(50, 50),
      new THREE.MeshStandardMaterial({
        map: snowColor,
        aoMap: snowAmbientOcclusion,
        normalMap: snowNormal,
        roughnessMap: snowRoughness,
      })
    );

    floor.rotation.x = -Math.PI * 0.5;
    floor.position.y = 0;
    floor.receiveShadow = true;
    scene.add(floor);

    const sun = new THREE.Mesh(
      new THREE.SphereBufferGeometry(0.4, 100, 100),
      new THREE.MeshStandardMaterial({ color: 0xffffcc })
    );
    sun.position.set(1, 5, 10);

    const sunDirectionalLight = new THREE.DirectionalLight(0xffff80, 1);
    sunDirectionalLight.position.set(0.5, 4.5, -9);
    sunDirectionalLight.target = sun;

    const moonTexture = textureLoader.load('/textures/moon/moon.jpg');
    const moon = new THREE.Mesh(
      new THREE.SphereBufferGeometry(0.4, 100, 100),
      new THREE.MeshStandardMaterial({
        map: moonTexture,
      })
    );
    moon.position.set(1, 5, -10);

    const moonDirectionalLight = new THREE.DirectionalLight(0xb9d5ff, 1);
    moonDirectionalLight.position.set(0.5, 4.5, -9);
    moonDirectionalLight.target = moon;

    if (showLight) {
      scene.add(rectAreaLight);
      scene.add(ambientLight);
      scene.add(pointLight);
      renderer.setClearColor(0xe6ffff);
      scene.fog = fog;
      scene.add(sunDirectionalLight);
      scene.add(sun);
    } else {
      scene.add(moonLight);
      renderer.setClearColor(0x000000);
      scene.add(rectAreaLight);
      scene.add(moonDirectionalLight);
      scene.add(moon);
    }

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
  }, [darkMode]);

  return <div ref={mountRef}></div>;
};

export default App;
