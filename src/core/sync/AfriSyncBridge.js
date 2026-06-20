export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
// AFRISYNC_CLUSTER_INGESTION_ACTIVE
export class AfriSyncBridge {
  constructor(url) {
// AFRISYNC_INGEST_ONLY     this.ws = new WebSocket(url);
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
