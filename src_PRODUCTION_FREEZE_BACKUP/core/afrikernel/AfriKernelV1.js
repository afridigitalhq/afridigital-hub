// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
// TIME_TRAVEL_KERNEL_CONTROLLED
// DETERMINISTIC_RENDERER_V2_ACTIVE
export class AfriKernelV1 {
  constructor({ eventLog, dagBuilder, validator, physics, renderer }) {
    this.eventLog = eventLog;
    this.dagBuilder = dagBuilder;
    this.validator = validator;
    this.physics = physics;
    this.renderer = renderer;

    this.state = { nodes: [], edges: [] };
  }

  ingest(event) {
    // 1. validate causal correctness
    if (this.validator && !this.validator.enforce(event)) return null;

    // 2. store event (single source of truth)
    this.eventLog.push(event);

    // 3. rebuild DAG deterministically
    this.state = this.dagBuilder.build(this.eventLog);

    // 4. optional physics layout
    if (this.physics) {
      this.state = this.physics.step(this.state.nodes, this.state.edges);
    }

    // 5. render
    if (this.renderer) {
      this.renderer.render(this.state);
    }

    return this.state;
  }

  replay(atTime) {
    const sliced = this.eventLog.filter(e => e.ts <= atTime);
    const state = this.dagBuilder.build(sliced);

    return this.physics
      ? this.physics.step(state.nodes, state.edges)
      : state;
  }

  snapshot() {
    return {
      events: this.eventLog.length,
      nodes: this.state.nodes.length,
      edges: this.state.edges.length
    };
  }
}
