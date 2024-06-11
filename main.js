import { createScene } from "./src/scene";

window.onload = () => {
  window.scene = createScene()
  window.scene.start()
}
