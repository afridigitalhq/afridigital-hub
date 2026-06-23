export class GPUNodeRenderer {
  constructor(gl) {
    this.gl = gl;
    this.energy = 0;
  }

  applySnapshot(snapshot) {
    this.energy = snapshot.nodes.length / 100;
    return snapshot.nodes.map(n => ({
      ...n,
      visualEnergy: this.energy
    }));
  }
}
