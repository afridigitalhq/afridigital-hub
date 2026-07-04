// AFRIKERNEL_INGESTION_SINGLE_PATH_ENFORCED (AFRISYNC → DAGRuntime ONLY)
// AFRIKERNEL_PRODUCTION_MODE_LOCKED (NO ARCHITECTURE CHANGES ALLOWED)
// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
export class EventCompressor {
  constructor() {
    this.buffer = [];
    this.lastFlush = Date.now();
  }

  compress(event) {
    // delta encoding (basic causal compression)
    const prev = this.buffer[this.buffer.length - 1];

    const compressed = {
      id: event.id,
      type: event.type,
      ts: event.ts || Date.now(),
      dts: prev ? (event.ts - prev.ts) : 0,
      payload: event.payload
    };

    this.buffer.push(compressed);

    // lightweight flush strategy
    if (this.buffer.length > 50 || Date.now() - this.lastFlush > 2000) {
      const out = this.buffer;
      this.buffer = [];
      this.lastFlush = Date.now();
      return out;
    }

    return null;
  }

  decompress(batch) {
    return batch.map((e, i, arr) => {
      if (i === 0) return e;
      return {
        ...e,
        ts: arr[i - 1].ts + e.dts
      };
    });
  }
}
