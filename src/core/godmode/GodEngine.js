import { applyGodMotion } from "./physics/MotionEngine";
import { applyDepth } from "./depth/DepthEngine";

export class GodEngine {
  constructor(audio, camera) {
    this.audio = audio;
    this.camera = camera;
  }

  tick(nodes) {
    const energy = this.audio.energy();

    this.camera.focus(energy);

    let out = applyGodMotion(nodes, energy);
    out = applyDepth(out);

    return {
      nodes: out,
      cameraStyle: this.camera.tick(),
      energy
    };
  }
}
