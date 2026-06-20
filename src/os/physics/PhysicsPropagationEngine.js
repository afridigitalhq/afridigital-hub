export class PhysicsPropagationEngine {
  constructor(dag) {
    this.dag = dag;
    this.forces = new Map();
  }

  inject(event) {
    const energy = this.calculateEnergy(event);

    this.propagate(event.nodeId, energy);

    return { event, energy };
  }

  calculateEnergy(event) {
    switch (event.type) {
      case "SECURITY": return 0.9;
      case "FINANCE": return 0.7;
      case "SYSTEM": return 0.5;
      default: return 0.3;
    }
  }

  propagate(nodeId, energy) {
    const node = this.dag?.getNode?.(nodeId);
    if (!node) return;

    const neighbors = node.connections || [];

    neighbors.forEach(n => {
      const reduced = energy * 0.6;

      this.forces.set(n, reduced);

      this.dag?.updateNode?.(n, {
        stress: reduced
      });
    });
  }

  getState() {
    return Object.fromEntries(this.forces);
  }
}
