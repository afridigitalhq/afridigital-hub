export class SwarmEngine {
  constructor(nodes) {
    this.nodes = nodes;
    this.agents = nodes.map(n => ({
      id: n.id,
      state: "idle",
      energy: Math.random()
    }));
  }

  tick() {
    return this.agents.map(a => {
      const jitter = Math.random() * 0.2;

      return {
        ...a,
        energy: Math.max(0, Math.min(1, a.energy + jitter - 0.1)),
        state: a.energy > 0.7 ? "active" : "idle"
      };
    });
  }
}
