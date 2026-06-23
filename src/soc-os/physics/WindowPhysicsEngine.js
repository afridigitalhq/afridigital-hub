export class WindowPhysicsEngine {
  constructor() {
    this.windows = [];
    this.friction = 0.92;
    this.repulsion = 1200;
  }

  register(win) {
    this.windows.push({
      ...win,
      vx: 0,
      vy: 0
    });
  }

  applyForce() {
    for (let w of this.windows) {
      for (let o of this.windows) {
        if (w.id === o.id) continue;

        const dx = w.x - o.x;
        const dy = w.y - o.y;

        const dist = Math.max(Math.sqrt(dx * dx + dy * dy), 0.1);
        const force = this.repulsion / (dist * dist);

        w.vx += dx * force * 0.001;
        w.vy += dy * force * 0.001;
      }

      // inertia + damping
      w.vx *= this.friction;
      w.vy *= this.friction;

      w.x += w.vx;
      w.y += w.vy;
    }
  }

  drag(id, dx, dy) {
    const w = this.windows.find(w => w.id === id);
    if (!w) return;

    w.x += dx;
    w.y += dy;

    w.vx = dx;
    w.vy = dy;
  }
}
