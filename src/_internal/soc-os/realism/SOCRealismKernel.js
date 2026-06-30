
/**
 * 🧠 SOC REALISM KERNEL (READ-ONLY LAYER)
 * --------------------------------------
 * Enhances perceived OS realism WITHOUT modifying core logic.
 */

export class SOCRealismKernel {

  constructor() {
    this.config = {
      animationCurve: "win11-ease",
      inputLatencyMs: 12,
      renderSmoothing: true,
      bootCinematicMode: true,
      audioSync: true
    };

    this.metrics = {
      lastFrameTime: 0,
      perceivedLag: 0,
      uiStress: 0
    };
  }

  // 🪟 simulate Windows-like motion feel
  applyEasing(t) {
    // cubic feel approximation of Fluent Design easing
    return 1 - Math.pow(1 - t, 3);
  }

  // ⏱ micro-latency illusion layer (DOES NOT block execution)
  simulateLatency(fn) {
    return (...args) => {
      const delay = this.config.inputLatencyMs;

      return new Promise(resolve => {
        setTimeout(() => {
          resolve(fn(...args));
        }, delay);
      });
    };
  }

  // 🎬 boot realism hook (visual only)
  bootPhase(phase) {
    const timeline = {
      BIOS: 0.6,
      KERNEL: 1.2,
      LOGIN: 1.8,
      DESKTOP: 2.4
    };

    return timeline[phase] || 0;
  }

  // 🧠 perception smoothing metric (HUD use)
  getSystemFeel() {
    return {
      responsiveness: "fluid",
      coherence: "win11-like",
      perceivedLag: this.metrics.perceivedLag
    };
  }
}
