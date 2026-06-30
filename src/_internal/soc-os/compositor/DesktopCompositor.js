export class DesktopCompositor {
  constructor() {
    this.layers = new Map();
  }

  registerWindow(id, depth = 0) {
    this.layers.set(id, { depth, blur: 0 });
  }

  focusWindow(id) {
    for (const [key, w] of this.layers.entries()) {
      w.blur = key === id ? 0 : 6;
      w.depth = key === id ? 100 : 10;
    }
    return this.layers;
  }

  getStyle(id) {
    const w = this.layers.get(id);
    if (!w) return {};
    return {
      backdropFilter: `blur(${w.blur}px)`,
      transform: `translateZ(${w.depth}px)`
    };
  }
}
