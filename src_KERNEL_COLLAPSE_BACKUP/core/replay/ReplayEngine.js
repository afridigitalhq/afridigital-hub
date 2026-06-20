// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
// TIME_TRAVEL_KERNEL_CONTROLLED
export class ReplayEngine {
  constructor(dag) {
    this.dag = dag;
    this.time = 0;
  }

  seek(time) {
    this.time = time;
    return this.dag.timeline.filter(e => e.ts <= time);
  }

  scrub(delta) {
    this.time += delta;
    return this.seek(this.time);
  }

  reset() {
    this.time = 0;
  }
}
