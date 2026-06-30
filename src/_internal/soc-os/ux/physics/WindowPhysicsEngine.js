export class WindowPhysicsEngine {
  constructor() {
    this.windows = [];
    this.damping = 0.85;
    this.repulsion = 120;
  }

  add(win) {
    this.windows.push({ ...win, vx: 0, vy: 0 });
  }

  step() {
    for (let a of this.windows) {
      for (let b of this.windows) {
        if (a.id === b.id) continue;

        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.max(1, Math.sqrt(dx*dx + dy*dy));

        const force = this.repulsion / dist;

        a.vx += dx * force * 0.01;
        a.vy += dy * force * 0.01;
      }

      a.vx *= this.damping;
      a.vy *= this.damping;

      a.x += a.vx;
      a.y += a.vy;
    }
  }
}
