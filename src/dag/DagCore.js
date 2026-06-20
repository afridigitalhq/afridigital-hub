// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
// TIME_TRAVEL_KERNEL_CONTROLLED
export const DagStore = {
  events: [],
  pointers: { head: -1 },

  emit(type, payload = {}) {
    const event = {
      id: crypto.randomUUID?.() || String(Date.now()),
      type,
      payload,
      ts: Date.now(),
    };
    this.events.push(event);
    this.pointers.head = this.events.length - 1;
    window.dispatchEvent(new CustomEvent("DAG_EVENT", { detail: event }));
    return event;
  },

  replay(from = 0, to = this.events.length) {
    return this.events.slice(from, to);
  },

  travel(index) {
    return this.events[index] || null;
  }
};
