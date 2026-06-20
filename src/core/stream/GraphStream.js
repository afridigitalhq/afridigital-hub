// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
// DETERMINISTIC_RENDERER_V2_ACTIVE
// AFRISYNC_CLUSTER_INGESTION_ACTIVE
export class GraphStream {
  constructor(url, onUpdate) {
    this.url = url;
    this.ws = null;
    this.onUpdate = onUpdate;
    this.alive = true;
  }

  connect() {
// AFRISYNC_INGEST_ONLY     this.ws = new WebSocket(this.url);

    this.ws.onopen = () => {
      console.log("🟢 GraphStream connected");
    };

    this.ws.onmessage = (event) => {
      if (!this.alive) return;

      try {
        const data = JSON.parse(event.data);
        this.onUpdate?.(data);
      } catch (e) {}
    };

    this.ws.onclose = () => {
      if (!this.alive) return;
      console.log("🔁 reconnecting graph stream...");
      setTimeout(() => this.connect(), 2000);
    };

    this.ws.onerror = () => {};
  }

  close() {
    this.alive = false;
    this.ws?.close();
  }
}
