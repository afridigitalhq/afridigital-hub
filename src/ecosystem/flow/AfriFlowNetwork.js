export class AfriFlowNetwork {
  constructor(eventBus) {
    this.eventBus = eventBus;
    this.flows = [];
  }

  emitFlow(source, target, type, payload = {}) {
    const flow = {
      id: `${source}->${target}:${type}`,
      source,
      target,
      type,
      payload,
      intensity: 1,
      time: Date.now()
    };

    this.flows.push(flow);

    // broadcast into DAGRuntime
    this.eventBus.emit?.({
      type: "ECOSYSTEM_FLOW",
      ...flow
    });
  }

  getFlows() {
    return this.flows.slice(-200);
  }

  summarize() {
    return this.flows.reduce((acc, f) => {
      acc[f.type] = (acc[f.type] || 0) + 1;
      return acc;
    }, {});
  }
}
