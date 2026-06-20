export class DAGSimulationBridge {
  constructor({
    dagRuntime,
    simulationKernel
  }) {
    this.dagRuntime = dagRuntime;
    this.sim = simulationKernel;

    this.state = {
      liquidity: {},
      stress: {},
      security: [],
      swarm: []
    };
  }

  bind() {
    // 🧠 Listen to DAG events only
    this.dagRuntime.onEvent?.((event) => {
      this.sim.onEvent(event);
    });

    // ⚡ periodic simulation tick
    setInterval(() => {
      this.state = this.sim.tick();
    }, 500);
  }

  getState() {
    return this.state;
  }
}
