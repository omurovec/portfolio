import * as THREE from "three";

export default function Icosahedron(id, size) {
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75, size.width/size.height, 0.1, 1000);

    let bgColor = new THREE.Color(0xf8f8f8);
    scene.background = bgColor;
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(size.width, size.height);
    document.querySelector(id).appendChild(renderer.domElement);

    let geometry = new THREE.IcosahedronGeometry(3, 0);
    let material = new THREE.MeshBasicMaterial({
      color: '#000000',
      wireframe: false,
    })

    let icosahedron = new THREE.Mesh(geometry, material)
    scene.add(icosahedron);
    camera.position.z = 5;
    var animate = function() {
      requestAnimationFrame(animate);

      icosahedron.rotation.y += 0.005;
      icosahedron.rotation.x += 0.005;

      renderer.render(scene, camera);
    };
    animate();
}
