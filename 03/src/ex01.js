import * as THREE from "three";

export default function ex() {
  const canvas = document.querySelector("#three-canvas");

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(devicePixelRatio > 1 ? 2 : 1);
  //   renderer.setClearAlpha(1);
  //   renderer.setClearColor(0x00ff00);
  renderer.setClearColor(0x00ff00);
  renderer.setClearAlpha(0.2);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color("grey");

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  //   camera.position.x = 3;
  //   camera.position.y = 2;
  camera.position.z = 10;

  scene.add(camera);

  const light = new THREE.DirectionalLight(0xffffff, 2);
  light.position.x = 2;
  light.position.z = 3;
  scene.add(light);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({
    color: "red",
  });

  const mesh = new THREE.Mesh(geometry, material);

  scene.add(mesh);

  function draw() {
    mesh.rotation.y += 0.1;
    renderer.render(scene, camera);

    requestAnimationFrame();
  }

  function setSize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  }

  window.addEventListener("resize", setSize);
  draw();
}
