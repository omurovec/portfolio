import * as THREE from "three";

export default function Icosahedron(id, size) {
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75, size.width/size.height, 0.01, 10);
    camera.fov = 10;

    let bgColor = new THREE.Color(0xf8f8f8);
    scene.background = bgColor;
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(size.width, size.height);
    document.querySelector(id).appendChild(renderer.domElement);

    const sizeDiff = size.width > 300 ? 0.005 : 0.01;
    let geometry = new THREE.IcosahedronGeometry(3, 1);
    let altGeometry = new THREE.IcosahedronGeometry(3 + sizeDiff, 1);
   
    let edges = new THREE.EdgesGeometry(altGeometry);
    let lines = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({color: "#000", linewidth: 1})
    );
    let material = new THREE.MeshBasicMaterial({
      color: '#f8f8f8',
    })

    let icosahedron = new THREE.Mesh(geometry, material)
    scene.add(lines);
    scene.add(icosahedron);
    camera.position.z = 5;
    var animate = function() {
      requestAnimationFrame(animate);

      icosahedron.rotation.y += 0.001;
      icosahedron.rotation.x += 0.001;
      lines.rotation.y += 0.001;
      lines.rotation.x += 0.001;

      renderer.render(scene, camera);
    };
    animate();
}
