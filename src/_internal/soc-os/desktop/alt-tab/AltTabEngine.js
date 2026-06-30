export class AltTabEngine {
  constructor(windows = []) {
    this.windows = windows;
    this.activeIndex = 0;
  }

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.windows.length;
    return this.getActive();
  }

  prev() {
    this.activeIndex =
      (this.activeIndex - 1 + this.windows.length) %
      this.windows.length;

    return this.getActive();
  }

  getActive() {
    return this.windows[this.activeIndex];
  }
}
