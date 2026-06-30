export class TrueSnapAssist {
  constructor() {
    this.gap = 12;
    this.snapZone = 40;
  }

  resolve(windows, bounds) {
    for (let a of windows) {
      for (let b of windows) {
        if (a.id === b.id) continue;

        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx*dx + dy*dy) || 1;

        if (dist < 120) {
          a.x += dx * 0.05;
          a.y += dy * 0.05;
        }
      }

      // snap edges
      if (a.x < this.snapZone) a.x = 0;
      if (a.y < this.snapZone) a.y = 0;

      if (Math.abs(a.x - bounds.width / 2) < this.snapZone)
        a.x = bounds.width / 2;
    }

    return windows;
  }
}
