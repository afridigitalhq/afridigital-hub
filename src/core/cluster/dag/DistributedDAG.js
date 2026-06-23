export class DistributedDAG {
  constructor() {
    this.nodes = new Map();
    this.edges = [];
    this.timeline = [];
  }

  apply(event) {
    this.timeline.push(event);

    if (event.type === "NODE_ADD") {
      this.nodes.set(event.node.id, event.node);
    }

    if (event.type === "NODE_UPDATE") {
      const n = this.nodes.get(event.node.id);
      this.nodes.set(event.node.id, { ...n, ...event.node });
    }

    if (event.type === "EDGE_ADD") {
      this.edges.push(event.edge);
    }
  }

  snapshot() {
    return {
      nodes: Array.from(this.nodes.values()),
      edges: this.edges,
      time: Date.now()
    };
  }
}
