export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
// AFRISYNC_CLUSTER_INGESTION_ACTIVE
export class WSBridge {
  constructor(url, onEvent) {
    this.url = url;
    this.onEvent = onEvent;
    this.ws = null;
    this.alive = true;
  }

  connect() {
// AFRISYNC_INGEST_ONLY     this.ws = new WebSocket(this.url);

    this.ws.onmessage = (msg) => {
      if (!this.alive) return;
      try {
        const event = JSON.parse(msg.data);
        this.onEvent(event);
      } catch {}
    };

    this.ws.onclose = () => {
      if (!this.alive) return;
      setTimeout(() => this.connect(), 1500);
    };
  }

  close() {
    this.alive = false;
    this.ws?.close();
  }
}
