export default class AfriAIOrchestrator {
  constructor({ eventBus, runtime }) {
    this.eventBus = eventBus;
    this.runtime = runtime;
  }

  dispatch(intent) {
    this.eventBus.emit("afriai:intent", intent);

    if (this.runtime?.execute) {
      return this.runtime.execute(intent);
    }

    return {
      status: "queued",
      message: "Runtime not ready"
    };
  }

  linkSystemGraph(nodes = {}) {
    this.nodes = nodes;

    return {
      status: "linked",
      graph: Object.keys(nodes)
    };
  }
}
