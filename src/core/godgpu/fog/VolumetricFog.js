export class VolumetricFog {
  constructor(gl) {
    this.gl = gl;
  }

  applyEnergyFog(energy) {
    return {
      density: 0.15 + energy * 0.6,
      scatter: 0.4 + energy * 0.8,
      color: [0.0, 0.8, 1.0]
    };
  }
}
