export class PhysicsWindows {
  constructor() {
    this.windows = [];
    this.forces = {
      repulsion: 0.8,
      attraction: 0.02,
      damping: 0.9
    };
  }

  addWindow(id, x, y) {
    this.windows.push({ id, x, y, vx: 0, vy: 0 });
  }

  applyPhysics() {
    for (let w of this.windows) {
      for (let other of this.windows) {
        if (w.id === other.id) continue;

        let dx = w.x - other.x;
        let dy = w.y - other.y;
        let dist = Math.sqrt(dx*dx + dy*dy) + 0.01;

        let force = this.forces.repulsion / dist;

        w.vx += dx * force;
        w.vy += dy * force;
      }

      w.vx *= this.forces.damping;
      w.vy *= this.forces.damping;

      w.x += w.vx;
      w.y += w.vy;
    }
  }
}
