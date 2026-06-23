export class WindowManagerUX {
  constructor() {
    this.windows = [];
    this.activeWindow = null;
  }

  open(id, config = {}) {
    const win = {
      id,
      x: config.x || 80,
      y: config.y || 60,
      w: config.w || 600,
      h: config.h || 400,
      z: this.windows.length + 1,
      minimized: false
    };

    this.windows.push(win);
    this.focus(id);
  }

  focus(id) {
    this.activeWindow = id;
    this.windows.forEach(w => {
      w.z = (w.id === id) ? 999 : w.z;
    });
  }

  move(id, x, y) {
    const w = this.windows.find(w => w.id === id);
    if (w) { w.x = x; w.y = y; }
  }

  snapLeft(id) {
    const w = this.windows.find(w => w.id === id);
    if (w) w.x = 0;
  }

  snapRight(id) {
    const w = this.windows.find(w => w.id === id);
    if (w) w.x = window.innerWidth / 2;
  }
}
