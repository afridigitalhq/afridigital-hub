// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// AFRISYNC_ONLY_INGRESS_LAYER
// REPLAY_IS_SINGLE_SOURCE_OF_TRUTH
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
// TIME_TRAVEL_KERNEL_CONTROLLED
export class TimeTravel {
  constructor() {
    this.snapshots = [];
  }

  save(state) {
    this.snapshots.push({
      ts: Date.now(),
      state: JSON.parse(JSON.stringify(state))
    });
  }

  rollback(time) {
    return this.snapshots
      .filter(s => s.ts <= time)
      .pop()?.state || null;
  }
}
