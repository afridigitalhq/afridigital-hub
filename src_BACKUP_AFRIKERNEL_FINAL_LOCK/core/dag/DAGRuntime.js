export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
// TIME_TRAVEL_KERNEL_CONTROLLED
// DETERMINISTIC_RENDERER_V2_ACTIVE
export class AfriKernelDAG {
  constructor() {
    this.timeline = [];
    this.nodes = new Map();
    this.edges = [];
  }

  emit(event) {
    const node = { ...event, ts: Date.now() };
    this.timeline.push(node);
    this.nodes.set(node.id || this.timeline.length, node);

    // simple edge inference (causal chain)
    const prev = this.timeline[this.timeline.length - 2];
    if (prev) this.edges.push({ from: prev.id || this.timeline.length - 1, to: node.id || this.timeline.length });

    return node;
  }

  replay(time) {
    return this.timeline.filter(e => e.ts <= time);
  }

  graph() {
    return {
      nodes: Array.from(this.nodes.values()),
      edges: this.edges
    };
  }
}
