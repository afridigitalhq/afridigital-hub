export class Win11FrameCompositorSync {

  constructor() {
    this.frame = 0;
  }

  tick(window) {
    this.frame++;

    return {
      ...window,
      frame,
      lockedToGPU: true,
      sync: "requestAnimationFrame"
    };
  }

}
