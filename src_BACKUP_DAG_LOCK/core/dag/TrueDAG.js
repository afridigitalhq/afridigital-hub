export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
// TIME_TRAVEL_KERNEL_CONTROLLED
export class TrueDAG {
  constructor() {
    this.nodes = new Map();
    this.edges = [];
    this.timeline = [];
  }

  ingest(event) {
    const node = {
      id: event.i,
      type: event.t,
      payload: event.p,
      ts: event.ts
    };

    this.nodes.set(node.id, node);

    if (event.dependsOn) {
      this.edges.push({ source: event.dependsOn, target: node.id });
    }

    this.timeline.push(node);
    return node;
  }

  replay(time) {
    return this.timeline.filter(n => n.ts <= time);
  }

  snapshot() {
    return {
      nodes: Array.from(this.nodes.values()),
      edges: this.edges
    };
  }
}
