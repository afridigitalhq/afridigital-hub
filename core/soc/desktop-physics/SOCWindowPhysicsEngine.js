export class SOCWindowPhysicsEngine {

  constructor() {
    this.windows = [];
    this.gravity = 0.02;
    this.friction = 0.92;
    this.repulsion = 120;
  }

  addWindow(id, x = 0, y = 0) {
    this.windows.push({
      id,
      x, y,
      vx: 0, vy: 0,
      pinned: false
    });
  }

  applyPhysics() {
    for (let w of this.windows) {

      if (w.pinned) continue;

      for (let o of this.windows) {
        if (w.id === o.id) continue;

        let dx = w.x - o.x;
        let dy = w.y - o.y;

        let dist = Math.sqrt(dx*dx + dy*dy) + 0.01;
        let force = this.repulsion / (dist * dist);

        w.vx += dx * force;
        w.vy += dy * force;
      }

      // soft gravity center pull
      w.vy += this.gravity;

      w.vx *= this.friction;
      w.vy *= this.friction;

      w.x += w.vx;
      w.y += w.vy;
    }
  }

  moveWindow(id, x, y) {
    const w = this.windows.find(w => w.id === id);
    if (w) {
      w.x = x;
      w.y = y;
      w.vx = 0;
      w.vy = 0;
    }
  }

  pinWindow(id, pinned) {
    const w = this.windows.find(w => w.id === id);
    if (w) w.pinned = pinned;
  }
}
