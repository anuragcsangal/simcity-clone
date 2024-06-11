// Setup Scene for the game
import * as THREE from "three"

export function createScene() {
  // Install scene setup
  const gameWindow = document.getElementById('render-target')
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x777777);

  // camera setup
  const fov = 75
  const aspect = gameWindow.offsetWidth / gameWindow.offsetHeight
  const near = 0.1
  const far = 1000
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)

  camera.position.z = 5;

  // renderer
  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(gameWindow.offsetWidth, gameWindow.offsetHeight)
  gameWindow.appendChild(renderer.domElement) // append canvas element to game window

  // sample geometry
  const geometry = new THREE.BoxGeometry(1, 1, 1,)
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  // To draw objects using renderer
  function draw() {
    mesh.rotation.x += 0.01
    mesh.rotation.y += 0.01
    renderer.render(scene, camera)
  }

  // To start animation loop
  function start() {
    renderer.setAnimationLoop(draw)
  }

  // To stop animation loop
  function stop() {
    renderer.setAnimationLoop(null)
  }


  return {
    start,
    stop
  }
}
