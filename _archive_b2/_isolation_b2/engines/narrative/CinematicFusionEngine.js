import { applyAudioMotion } from "./DAGMotionDriver";

export class CinematicFusionEngine {
  constructor(audio, camera) {
    this.audio = audio;
    this.camera = camera;
  }

  tick(nodes) {
    const e = this.audio.energy();
    this.camera.focus(e);

    return {
      nodes: applyAudioMotion(nodes, e),
      cameraStyle: this.camera.tick(),
      energy: e
    };
  }
}
