import * as THREE from 'three';

export default function Icosahedron(id, size) {
  // Set Scene
  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera(
    75,
    size.width / size.height,
    0.01,
    10
  );
  camera.fov = 10;
  let renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  renderer.setSize(size.width, size.height);
  renderer.setPixelRatio(window.devicePixelRatio);
  document.querySelector(id).appendChild(renderer.domElement);

  // Adjust size for platform
  const sizeDiff = size.width > 300 ? 0.005 : 0.01;

  // Match background color to page background color
  // (ie. fix colors for dynamic darkmode systems)
  let pageBg = window
    .getComputedStyle(document.querySelector('html'))
    .getPropertyValue('background-color');
  let bgColor = new THREE.Color(pageBg);
  scene.background = bgColor;

  // Contrast wireframe color
  const [R, G, B] = pageBg.slice(4, pageBg.length - 1).split(',');
  let frameColor = R > 200 || G > 200 || B > 200 ? '#000' : '#FFF';

  // Setup Geometry
  let geometry = new THREE.IcosahedronGeometry(3, 1);
  let altGeometry = new THREE.IcosahedronGeometry(3 + sizeDiff, 1);
  let edges = new THREE.EdgesGeometry(altGeometry);
  let lines = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: frameColor, linewidth: 1 })
  );
  let material = new THREE.MeshBasicMaterial({
    color: bgColor,
  });
  let icosahedron = new THREE.Mesh(geometry, material);

  // Attach to Scene
  scene.add(lines);
  scene.add(icosahedron);
  camera.position.z = 5;

  // Animate
  var animate = function () {
    requestAnimationFrame(animate);

    icosahedron.rotation.y += 0.001;
    icosahedron.rotation.x += 0.001;
    lines.rotation.y += 0.001;
    lines.rotation.x += 0.001;

    renderer.render(scene, camera);
  };
  animate();
}
