export class StressEngine {
  constructor(graph) {
    this.graph = graph;
    this.stressMap = {};
  }

  inject(nodeId, intensity = 1) {
    this.stressMap[nodeId] = (this.stressMap[nodeId] || 0) + intensity;
  }

  propagate() {
    const next = { ...this.stressMap };

    for (const id in this.stressMap) {
      const neighbors = this.graph.getNeighbors?.(id) || [];
      const value = this.stressMap[id] * 0.6;

      neighbors.forEach(n => {
        next[n] = (next[n] || 0) + value * 0.4;
      });

      next[id] *= 0.85; // decay
    }

    this.stressMap = next;
    return next;
  }
}
