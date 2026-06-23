export class CameraCore {
  constructor() {
    this.zoom = 1;
    this.target = 1;
  }

  focus(energy) {
    this.target = 1 + energy * 0.8;
  }

  tick() {
    this.zoom += (this.target - this.zoom) * 0.07;
    return {
      transform: `scale(${this.zoom})`
    };
  }
}
