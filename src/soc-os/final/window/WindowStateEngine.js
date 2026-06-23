export class WindowStateEngine {
  constructor() {
    this.windows = new Map();
    this.focused = null;
  }

  register(id) {
    this.windows.set(id, {
      minimized: false,
      focused: false
    });
  }

  focus(id) {
    this.focused = id;

    for (const [key, win] of this.windows) {
      win.focused = key === id;
      if (key !== id) win.blurred = true;
      else win.blurred = false;
    }
  }

  minimize(id) {
    const w = this.windows.get(id);
    if (w) w.minimized = !w.minimized;
  }

  get(id) {
    return this.windows.get(id);
  }
}
