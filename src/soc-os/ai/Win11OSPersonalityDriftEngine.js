
/**
 * 🧠 Win11 OS Personality Drift Engine
 * - creates "felt personality" of OS over time
 * - purely perceptual (no logic mutation)
 */

export class Win11OSPersonalityDriftEngine {
  constructor(runtime) {
    this.runtime = runtime;

    this.state = {
      mood: "neutral",
      intensity: 0.5,
      responsivenessFeel: "balanced",
      animationStyle: "smooth",
      systemTone: "standard"
    };

    this.events = [];
  }

  observe(event) {
    this.events.push(event);

    this.updateMood(event);

    this.runtime?.attachTelemetry?.({
      type: "OS_PERSONALITY_DRIFT",
      payload: this.state
    });
  }

  updateMood(event) {

    // 🪟 high load → “tense system feel”
    if (event.type === "RENDER" && event.load > 0.85) {
      this.state.mood = "tense";
      this.state.animationStyle = "tight";
      this.state.systemTone = "urgent-lite";
    }

    // 🌐 smooth usage → “calm system feel”
    if (event.type === "IDLE_FLOW" && event.duration > 5000) {
      this.state.mood = "calm";
      this.state.animationStyle = "fluid";
      this.state.systemTone = "relaxed";
    }

    // 🧠 rapid switching → “energetic OS feel”
    if (event.type === "ALT_TAB_USAGE") {
      this.state.mood = "energetic";
      this.state.animationStyle = "responsive";
      this.state.systemTone = "adaptive";
    }

    // 🪟 startup / boot → “fresh system feel”
    if (event.type === "BOOT_SEQUENCE") {
      this.state.mood = "fresh";
      this.state.intensity = 0.7;
      this.state.systemTone = "welcoming";
    }
  }

  getPersonalityState() {
    return {
      ...this.state,
      driftScore: this.calculateDrift()
    };
  }

  calculateDrift() {
    return Math.min(1, this.events.length / 150);
  }
}
