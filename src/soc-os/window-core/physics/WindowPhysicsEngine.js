export class WindowPhysicsEngine {
  constructor() {
    this.repulsion = 0.8;
    this.damping = 0.85;
  }

  step(windows) {
    const list = Array.from(windows.values());

    for (let a of list) {
      for (let b of list) {
        if (a.id === b.id) continue;

        let dx = a.x - b.x;
        let dy = a.y - b.y;
        let dist = Math.sqrt(dx*dx + dy*dy) + 0.01;

        if (dist < 200) {
          a.x += dx * this.repulsion * 0.01;
          a.y += dy * this.repulsion * 0.01;
        }
      }

      // damping = smooth inertia feel
      a.x *= this.damping;
      a.y *= this.damping;
    }

    return windows;
  }
}
