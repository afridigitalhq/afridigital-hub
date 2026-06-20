export class EcosystemEdgeTranslator {
  constructor(eventBus) {
    this.eventBus = eventBus;
    this.edges = [];
  }

  translate(flow) {
    let style = {};
    let animated = true;

    switch (flow.type) {
      case "PAYMENT":
        style = { stroke: "#22c55e", strokeWidth: 2 }; // green money flow
        break;

      case "MESSAGE":
        style = { stroke: "#3b82f6", strokeDasharray: "5 5" }; // WhatsApp pulse
        break;

      case "AI_REASONING":
        style = { stroke: "#a855f7", strokeWidth: 3 }; // AfriAI cognition
        break;

      case "SECURITY_ALERT":
        style = { stroke: "#ef4444", strokeWidth: 3 }; // red threat wave
        break;

      case "SWARM_DECISION":
        style = { stroke: "#f59e0b", strokeDasharray: "2 6" }; // blinking logic
        break;

      default:
        style = { stroke: "#64748b" };
    }

    return {
      id: flow.id,
      source: flow.source,
      target: flow.target,
      animated,
      style,
      label: flow.type
    };
  }

  ingest(flow) {
    const edge = this.translate(flow);
    this.edges.push(edge);

    // broadcast to DAG runtime UI layer
    this.eventBus.emit?.({
      type: "EDGE_UPDATE",
      edge
    });
  }

  getEdges() {
    return this.edges.slice(-300);
  }
}
