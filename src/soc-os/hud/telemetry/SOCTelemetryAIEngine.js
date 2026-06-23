/**
 * 🤖 SOC AI EXPLANATION ENGINE
 * Converts telemetry → human-readable reasoning
 */

export class SOCTelemetryAIEngine {
  constructor(bridge) {
    this.bridge = bridge;
  }

  explainLatest() {
    const events = this.bridge.getStream();
    const last = events[events.length - 1];

    if (!last) return "No telemetry data available.";

    if (last.type === "render_lag") {
      return "UI lag detected due to rendering queue saturation or GPU compositor delay.";
    }

    if (last.type === "window_move") {
      return "Window movement triggered snap physics + inertia recalculation cycle.";
    }

    if (last.type === "alt_tab") {
      return "Alt+Tab transition executed with GPU grid interpolation animation.";
    }

    return "System event processed under normal runtime conditions.";
  }

  explainTimeline() {
    return this.bridge.getStream().map(e => ({
      event: e.type,
      explanation: this.explainLatest(e)
    }));
  }
}
