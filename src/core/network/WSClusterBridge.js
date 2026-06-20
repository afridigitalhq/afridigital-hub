export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
// AFRISYNC_CLUSTER_INGESTION_ACTIVE
import { AfriSyncCluster } from "../sync/AfriSyncCluster";

export class WSClusterBridge {
  constructor(url, nodeId, dag) {
    this.ws = null;
    this.url = url;
    this.dag = dag;
    this.cluster = new AfriSyncCluster(nodeId);
  }

  connect() {
// AFRISYNC_INGEST_ONLY     this.ws = new WebSocket(this.url);

    this.ws.onmessage = (msg) => {
      try {
        const event = JSON.parse(msg.data);
        this.cluster.ingest(event, this.dag);
      } catch {}
    };

    this.ws.onclose = () => {
      setTimeout(() => this.connect(), 1500);
    };
  }

  broadcast(event) {
    this.cluster.broadcast(event);
    this.ws?.send(JSON.stringify(event));
  }
}
