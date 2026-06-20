// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
// DETERMINISTIC_RENDERER_V2_ACTIVE
// AFRISYNC_CLUSTER_INGESTION_ACTIVE
export class DAGStream {
  constructor(wsUrl, dagRuntime) {
    this.wsUrl = wsUrl;
    this.dag = dagRuntime;
    this.ws = null;
    this.connected = false;
  }

  connect() {
// AFRISYNC_INGEST_ONLY     this.ws = new WebSocket(this.wsUrl);

    this.ws.onopen = () => {
      this.connected = true;
      this.emit({ type: "STREAM_READY" });
    };

    this.ws.onmessage = (msg) => {
      try {
        const event = JSON.parse(msg.data);

        // push into DAG runtime
        const node = this.dag.emit(event);

        // broadcast back enriched graph state (optional)
        this.ws.send(JSON.stringify({
          type: "NODE_ACK",
          node
        }));
      } catch (e) {}
    };

    this.ws.onclose = () => {
      this.connected = false;
      setTimeout(() => this.connect(), 2000);
    };
  }

  emit(event) {
    if (this.ws?.readyState === 1) {
      this.ws.send(JSON.stringify(event));
    }
  }
}
