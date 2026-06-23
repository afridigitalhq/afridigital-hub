export class SnapAssistEngine {
  constructor() {
    this.threshold = 40;
  }

  snap(win, bounds) {
    if (!win) return win;

    if (win.x < this.threshold) win.x = 0;
    if (win.y < this.threshold) win.y = 0;

    if (win.x > bounds.width / 2) win.x = bounds.width / 2;
    if (win.y > bounds.height / 2) win.y = bounds.height / 2;

    return win;
  }
}
