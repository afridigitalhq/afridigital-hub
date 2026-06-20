export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
export class DAGBuilder {
  constructor() {
    this.nodes = new Map();
    this.edges = [];
  }

  buildFromEvents(events) {
    this.nodes.clear();
    this.edges = [];

    for (const e of events) {
      const id = e.id || `${e.type}-${e.ts}`;

      this.nodes.set(id, {
        id,
        type: e.type,
        payload: e,
        ts: e.ts
      });

      if (e.from && e.to) {
        this.edges.push({
          from: e.from,
          to: e.to
        });
      }
    }

    return {
      nodes: Array.from(this.nodes.values()),
      edges: this.edges
    };
  }
}
