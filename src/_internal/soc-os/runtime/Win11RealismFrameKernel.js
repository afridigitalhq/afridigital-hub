export class Win11RealismFrameKernel {

  constructor() {
    this.frame = 0;
    this.targetFPS = 60;
    this.last = performance.now();
  }

  sync(callback) {
    requestAnimationFrame((t) => {
      const delta = t - this.last;
      this.last = t;

      this.frame++;

      const result = callback({
        frame: this.frame,
        delta,
        locked: true,
        mode: "win11_realism_kernel"
      });

      this.sync(callback);
      return result;
    });
  }

}
