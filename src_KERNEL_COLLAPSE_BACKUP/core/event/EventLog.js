// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
export class EventLog {
  constructor() {
    this.events = [];
  }

  append(event) {
    const e = {
      ...event,
      ts: Date.now()
    };
    this.events.push(e);
    return e;
  }

  getAll() {
    return this.events;
  }

  clear() {
    this.events = [];
  }
}
