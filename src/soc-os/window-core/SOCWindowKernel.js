export class SOCWindowKernel {
  constructor() {
    this.windows = new Map();
    this.activeWindow = null;
  }

  createWindow(id, data = {}) {
    this.windows.set(id, {
      id,
      x: data.x || 100,
      y: data.y || 100,
      width: data.width || 600,
      height: data.height || 400,
      z: data.z || 1,
      blur: 0,
      focus: false
    });
  }

  focusWindow(id) {
    this.activeWindow = id;

    for (let [key, w] of this.windows.entries()) {
      w.focus = key === id;
      w.blur = key === id ? 0 : 6;
      w.z = key === id ? 999 : 10;
    }

    return this.windows;
  }

  moveWindow(id, x, y) {
    const w = this.windows.get(id);
    if (!w) return;

    w.x = x;
    w.y = y;
  }

  snapshot() {
    return {
      activeWindow: this.activeWindow,
      windows: Array.from(this.windows.values())
    };
  }

  restore(snapshot) {
    this.windows.clear();

    snapshot.windows.forEach(w => {
      this.windows.set(w.id, w);
    });

    this.activeWindow = snapshot.activeWindow;
  }
}
