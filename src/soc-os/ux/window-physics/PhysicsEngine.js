export class PhysicsEngine {
  constructor() {
    this.windows = [];
    this.friction = 0.92;
    this.spring = 0.08;
  }

  register(win) {
    this.windows.push({
      ...win,
      vx: 0,
      vy: 0,
      dragging: false
    });
  }

  applyDrag(id, dx, dy) {
    const w = this.windows.find(w => w.id === id);
    if (!w) return;

    w.vx += dx * this.spring;
    w.vy += dy * this.spring;

    w.x += w.vx;
    w.y += w.vy;

    w.vx *= this.friction;
    w.vy *= this.friction;
  }

  tick() {
    for (const w of this.windows) {
      if (!w.dragging) {
        w.x += w.vx;
        w.y += w.vy;

        w.vx *= this.friction;
        w.vy *= this.friction;
      }
    }
  }
}
