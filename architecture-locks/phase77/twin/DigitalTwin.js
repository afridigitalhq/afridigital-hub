export class DigitalTwin {
  constructor() {
    this.state = [];
  }

  ingest(s) {
    this.state.push({ ...s, t: Date.now() });
  }

  predict() {
    const last = this.state[this.state.length - 1] || {};
    return {
      nodes: (last.nodes || 0) * 1.1,
      stress: Math.min(100, (last.stress || 0) + 5)
    };
  }
}
