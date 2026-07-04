export class Anomaly// BLOCKED_ENGINE:PredictionEngine {
  constructor() {
    this.history = [];
  }

  ingestSnapshot(snapshot) {
    this.history.push({
      time: Date.now(),
      ...snapshot
    });

    if (this.history.length > 50) {
      this.history.shift();
    }
  }

  predict() {
    if (this.history.length < 5) {
      return { risk: "LOW", confidence: 0 };
    }

    const recent = this.history.slice(-10);

    const avg =
      recent.reduce((s, h) => s + (h.totalGhosts || 0), 0) /
      recent.length;

    const latest = recent[recent.length - 1]?.totalGhosts || 0;

    const spike = latest - avg;

    const risk =
      spike > 8 ? "CRITICAL" :
      spike > 4 ? "HIGH" :
      spike > 2 ? "MEDIUM" : "LOW";

    return {
      risk,
      spike,
      confidence: Math.min(1, Math.abs(spike) / 10),
      forecast:
        risk === "CRITICAL"
          ? "System instability likely in affected cluster"
          : risk === "HIGH"
          ? "Growing runtime imbalance detected"
          : "System stable"
    };
  }
}
