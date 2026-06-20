// AFRIKERNEL_INGESTION_SINGLE_PATH_ENFORCED (AFRISYNC → DAGRuntime ONLY)
// AFRIKERNEL_PRODUCTION_MODE_LOCKED (NO ARCHITECTURE CHANGES ALLOWED)
// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
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
// AFRISYNC_INGEST_ONLY     this.ws = // REDIRECT_TO_AFRISYNC(this.url);

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
