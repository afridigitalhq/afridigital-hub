export class SnapAssistEngine {
  constructor() {
    this.edge = 35;
    this.grid = 12;
  }

  apply(windows, bounds) {
    return windows.map(w => {

      // 🧲 EDGE MAGNET
      if (w.x < this.edge) w.x = 0;
      if (w.y < this.edge) w.y = 0;

      // 🧲 CENTER SNAP
      if (Math.abs(w.x - bounds.width / 2) < this.edge) {
        w.x = bounds.width / 2;
      }

      if (Math.abs(w.y - bounds.height / 2) < this.edge) {
        w.y = bounds.height / 2;
      }

      // 🧲 GRID ALIGNMENT
      w.x = Math.round(w.x / this.grid) * this.grid;
      w.y = Math.round(w.y / this.grid) * this.grid;

      return w;
    });
  }
}
