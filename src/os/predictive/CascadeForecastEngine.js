export class CascadeForecastEngine {
  constructor(physicsEngine, dag) {
    this.physics = physicsEngine;
    this.dag = dag;
  }

  // 🔮 simulate future failure scenario
  simulate(event, depth = 3) {
    const scenario = {
      root: event,
      waves: [],
      riskScore: 0
    };

    let frontier = [event];

    for (let i = 0; i < depth; i++) {
      const next = [];

      frontier.forEach(e => {
        const result = this.physics.inject(e);

        const stress = result.energy;

        scenario.waves.push({
          node: e.nodeId,
          stress,
          depth: i
        });

        scenario.riskScore += stress;

        const node = this.dag?.getNode?.(e.nodeId);
        const neighbors = node?.connections || [];

        neighbors.forEach(n => {
          next.push({
            nodeId: n,
            type: e.type,
            predicted: true
          });
        });
      });

      frontier = next;
    }

    return scenario;
  }

  // 🔥 compute system-wide instability forecast
  forecastGlobalRisk(events) {
    let total = 0;

    events.forEach(e => {
      const sim = this.simulate(e, 2);
      total += sim.riskScore;
    });

    return {
      riskIndex: total / Math.max(events.length, 1),
      status:
        total > 10 ? "CRITICAL" :
        total > 5 ? "HIGH" :
        total > 2 ? "MEDIUM" : "LOW"
    };
  }
}
