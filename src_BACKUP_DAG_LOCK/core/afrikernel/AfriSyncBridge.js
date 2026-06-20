export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
// AFRISYNC_CLUSTER_INGESTION_ACTIVE
export class AfriSyncBridge {
  constructor(kernel, wsUrl) {
    this.kernel = kernel;
// AFRISYNC_INGEST_ONLY     this.ws = new WebSocket(wsUrl);
    this.buffer = [];
  }

  connect() {
    this.ws.onmessage = (msg) => {
      const event = JSON.parse(msg.data);

      // forward into kernel ONLY (single ingestion path)
      this.kernel.ingest(event);
    };
  }

  broadcast(event) {
    if (this.ws.readyState === 1) {
      this.ws.send(JSON.stringify(event));
    }
  }
}
