// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
export class ReplaySync {
  constructor(dag) {
    this.dag = dag;
  }

  getMissingEvents(remoteTimeline) {
    const localIds = new Set(this.dag.timeline.map(e => e.id));
    return remoteTimeline.filter(e => !localIds.has(e.id));
  }

  sync(remoteEvents) {
    const missing = this.getMissingEvents(remoteEvents);
    missing.forEach(e => this.dag.ingest(e));
    return missing.length;
  }
}
