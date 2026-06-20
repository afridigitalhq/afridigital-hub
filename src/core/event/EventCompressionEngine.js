// AFRIKERNEL_INGESTION_SINGLE_PATH_ENFORCED (AFRISYNC → DAGRuntime ONLY)
// AFRIKERNEL_PRODUCTION_MODE_LOCKED (NO ARCHITECTURE CHANGES ALLOWED)
// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
export class EventCompressionEngine {
  constructor() {
    this.buffer = [];
    this.windowMs = 50;
  }

  ingest(event) {
    const last = this.buffer[this.buffer.length - 1];

    if (
      last &&
      last.type === event.type &&
      JSON.stringify(last.payload) === JSON.stringify(event.payload) &&
      Date.now() - last.ts < this.windowMs
    ) {
      last.count = (last.count || 1) + 1;
      last.ts = Date.now();
      return null;
    }

    const compressed = {
      ...event,
      ts: Date.now(),
      count: 1
    };

    this.buffer.push(compressed);
    return compressed;
  }

  flush() {
    const out = [...this.buffer];
    this.buffer = [];
    return out;
  }
}
