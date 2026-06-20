export class StressFusionEngine {
  constructor() {
    this.history = [];
  }

  ingest(state) {
    this.history.push({
      time: Date.now(),
      bankLoad: state.bankLoad || 0,
      messageLoad: state.messageLoad || 0,
      aiLoad: state.aiLoad || 0
    });

    if (this.history.length > 100) this.history.shift();
  }

  computeStress() {
    if (this.history.length === 0) return { stress: 0 };

    const latest = this.history[this.history.length - 1];

    const stress =
      (latest.bankLoad * 0.4) +
      (latest.messageLoad * 0.3) +
      (latest.aiLoad * 0.3);

    return {
      stress,
      level:
        stress > 80 ? "CRITICAL" :
        stress > 50 ? "HIGH" :
        stress > 25 ? "MEDIUM" : "LOW"
    };
  }
}
