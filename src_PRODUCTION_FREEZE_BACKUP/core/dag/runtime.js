// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
// TIME_TRAVEL_KERNEL_CONTROLLED
export class AfriKernelDAG {
  constructor() {
    this.timeline = [];
    this.nodes = new Map();
  }

  emit(event) {
    const node = { ...event, ts: Date.now() };
    this.timeline.push(node);
    this.nodes.set(node.id || this.timeline.length, node);
    return node;
  }

  replay(time) {
    return this.timeline.filter(e => e.ts <= time);
  }

  getGraph() {
    return Array.from(this.nodes.values());
  }
}
