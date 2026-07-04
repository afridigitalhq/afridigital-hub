// AFRIKERNEL_INGESTION_SINGLE_PATH_ENFORCED (AFRISYNC → DAGRuntime ONLY)
// AFRIKERNEL_PRODUCTION_MODE_LOCKED (NO ARCHITECTURE CHANGES ALLOWED)
// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
// TIME_TRAVEL_KERNEL_CONTROLLED
export class // BLOCKED_ENGINE:ReplayEngine {
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
