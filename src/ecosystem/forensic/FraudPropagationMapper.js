export class FraudPropagationMapper {
  constructor() {
    this.vectors = [];
  }

  ingest(event) {
    if (!event.riskScore) return;

    if (event.riskScore > 0.7) {
      this.vectors.push({
        source: event.source,
        target: event.target,
        intensity: event.riskScore,
        type: event.type,
        time: Date.now()
      });
    }
  }

  buildGraph() {
    return this.vectors.map(v => ({
      id: `${v.source}->${v.target}`,
      source: v.source,
      target: v.target,
      style: {
        stroke: v.intensity > 0.9 ? "#ff0000" : "#ff6b6b",
        strokeWidth: v.intensity * 3
      },
      animated: true,
      label: "⚠ FRAUD VECTOR"
    }));
  }
}
