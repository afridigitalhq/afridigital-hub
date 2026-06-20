// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
// TIME_TRAVEL_KERNEL_CONTROLLED
// DETERMINISTIC_RENDERER_V2_ACTIVE
export class AfriKernel {
  constructor(sync, dag, renderer) {
    this.sync = sync;
    this.dag = dag;
    this.renderer = renderer;
  }

  ingest(event) {
    const compressed = this.sync.compress?.(event) || event;
    const node = this.dag.emit(compressed);
    this.renderer.update?.(this.dag.graph());
    return node;
  }

  replay(time) {
    const state = this.dag.replay(time);
    return this.renderer.render(state);
  }
}
