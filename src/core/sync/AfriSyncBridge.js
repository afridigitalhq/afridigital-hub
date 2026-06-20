// AFRIKERNEL_INGESTION_SINGLE_PATH_ENFORCED (AFRISYNC → DAGRuntime ONLY)
// AFRIKERNEL_PRODUCTION_MODE_LOCKED (NO ARCHITECTURE CHANGES ALLOWED)
// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
// AFRISYNC_CLUSTER_INGESTION_ACTIVE
export class AfriSyncBridge {
  constructor(url) {
// AFRISYNC_INGEST_ONLY     this.ws = // REDIRECT_TO_AFRISYNC(url);
    this.queue = [];
  }

  send(event) {
    const packet = JSON.stringify({ type: "event", data: event });
    this.ws.send(packet);
  }

  onMessage(handler) {
    this.ws.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      handler(data);
    };
  }

  compress(event) {
    return { ...event, c: 1 };
  }
}
