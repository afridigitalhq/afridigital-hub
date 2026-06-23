export class CameraController {
  constructor() {
    this.zoom = 1;
    this.target = 1;
  }

  focus(e) {
    this.target = 1 + e * 0.7;
  }

  tick() {
    this.zoom += (this.target - this.zoom) * 0.08;
    return { transform: `scale(${this.zoom})` };
  }
}
