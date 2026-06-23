import { GPUParticleEngine } from "../engine/GPUParticleEngine";
import { VolumetricFog } from "../fog/VolumetricFog";

export class GodGPU {
  constructor(gl) {
    this.gl = gl;
    this.particles = new GPUParticleEngine(gl);
    this.fog = new VolumetricFog(gl);
    this.time = 0;
  }

  tick(energy) {
    this.time += 0.016;

    this.particles.update(energy);
    const fog = this.fog.applyEnergyFog(energy);

    return {
      time: this.time,
      energy,
      fog,
      particles: this.particles.positions
    };
  }
}
