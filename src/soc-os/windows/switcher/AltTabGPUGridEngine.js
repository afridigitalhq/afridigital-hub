export class AltTabGPUGridEngine {
  constructor() {
    this.index = 0;
  }

  open(windows) {
    return windows.map((w, i) => ({
      ...w,
      scale: i === this.index ? 1 : 0.85,
      depth: i
    }));
  }

  next(windows) {
    this.index = (this.index + 1) % windows.length;
    return this.open(windows);
  }
}
