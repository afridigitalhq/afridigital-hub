export class WindowMotionEngine {
  constructor() {
    this.state = new Map();
    this.friction = 0.88;
  }

  register(id, x = 0, y = 0) {
    this.state.set(id, { x, y, vx: 0, vy: 0 });
  }

  drag(id, dx, dy) {
    const w = this.state.get(id);
    if (!w) return;

    w.x += dx;
    w.y += dy;

    w.vx = dx;
    w.vy = dy;
  }

  tick() {
    for (const w of this.state.values()) {
      w.vx *= this.friction;
      w.vy *= this.friction;

      w.x += w.vx;
      w.y += w.vy;
    }
  }

  get(id) {
    return this.state.get(id);
  }
}
