// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
// TIME_TRAVEL_KERNEL_CONTROLLED
// DETERMINISTIC_RENDERER_V2_ACTIVE
export class AfriKernelV1 {
  constructor(eventLog, dag, consensus, renderer) {
    this.eventLog = eventLog;
    this.dag = dag;
    this.consensus = consensus;
    this.renderer = renderer;
  }

  ingest(event) {
    const ordered = this.consensus.append(event);
    this.eventLog.push(ordered);

    const node = this.dag.emit(ordered);
    this.renderer.render(this.dag.graph());
    return node;
  }

  replay(time) {
    return this.dag.replay(time);
  }
}
