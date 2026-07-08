// Digital Twin Simulator
export class DigitalTwinSimulator {
  constructor() {
    this.snapshots = [];
  }

  ingest(state) {
    this.snapshots.push({
      time: Date.now(),
      nodes: state.nodes || 0,
      edges: state.edges || 0,
      load: state.load || 0,
      stress: state.stress || 0
    });

    if (this.snapshots.length > 200) this.snapshots.shift();
  }

  predictNext(steps = 5) {
    if (this.snapshots.length < 3) return { prediction: "insufficient data" };

    const latest = this.snapshots[this.snapshots.length - 1];
    const growth = (latest.nodes + latest.edges) / 2;

    return {
      predictedNodes: Math.round(latest.nodes + growth * 0.1 * steps),
      predictedEdges: Math.round(latest.edges + growth * 0.15 * steps),
      predictedStress: Math.min(100, latest.stress + steps * 3)
    };
  }
}
