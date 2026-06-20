// AFRIKERNEL_INGESTION_SINGLE_PATH_ENFORCED (AFRISYNC → DAGRuntime ONLY)
// AFRIKERNEL_PRODUCTION_MODE_LOCKED (NO ARCHITECTURE CHANGES ALLOWED)
// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
// TIME_TRAVEL_KERNEL_CONTROLLED
// DISABLED_DUPLICATE_DAG_ENGINE: // FROZEN_TRUE_DAG {
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
