export class CyberDigitalTwin {
  constructor() {
    this.nodes = new Map();
    this.links = [];
    this.state = "SIMULATION_MODE";
  }

  registerSystem(system) {
    this.nodes.set(system.id, {
      ...system,
      health: 100,
      load: 0,
      risk: 0
    });
  }

  injectEvent(event) {
    const target = this.nodes.get(event.target);

    if (target) {
      target.load += event.intensity || 1;
      target.risk += event.severity || 1;
    }
  }

  getSnapshot() {
    return {
      nodes: Array.from(this.nodes.values()),
      links: this.links,
      state: this.state
    };
  }
}
