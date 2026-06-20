// AFRIKERNEL_INGESTION_SINGLE_PATH_ENFORCED (AFRISYNC → DAGRuntime ONLY)
// AFRIKERNEL_PRODUCTION_MODE_LOCKED (NO ARCHITECTURE CHANGES ALLOWED)
// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
export class RaftOrdering {
  constructor() {
    this.log = [];
    this.term = 0;
  }

  append(event) {
    this.log.push({ ...event, term: this.term, index: this.log.length });
    return this.log[this.log.length - 1];
  }

  getOrderedLog() {
    return [...this.log].sort((a, b) => a.index - b.index);
  }
}
