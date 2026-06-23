export class GPUParticleEngine {
  constructor(gl, nodeCount = 500) {
    this.gl = gl;
    this.nodeCount = nodeCount;

    this.positions = new Float32Array(nodeCount * 3);
    this.velocities = new Float32Array(nodeCount * 3);

    for (let i = 0; i < nodeCount * 3; i++) {
      this.positions[i] = (Math.random() - 0.5) * 10;
      this.velocities[i] = (Math.random() - 0.5) * 0.02;
    }
  }

  update(energy) {
    for (let i = 0; i < this.nodeCount * 3; i += 3) {
      this.positions[i] += Math.sin(i + energy) * 0.01;
      this.positions[i + 1] += Math.cos(i + energy) * 0.01;
      this.positions[i + 2] += Math.sin(energy) * 0.005;
    }
  }
}
