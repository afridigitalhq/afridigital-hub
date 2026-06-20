// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
// AFRISYNC_CLUSTER_INGESTION_ACTIVE
import { EventCompressor } from "../dag/EventCompressor";

export class AfriKernelIngest {
  constructor(dag) {
    this.dag = dag;
    this.compressor = new EventCompressor();
    this.ws = null;
    this.alive = true;
  }

  connect(url = "wss://afridigital-api.onrender.com") {
// AFRISYNC_INGEST_ONLY     this.ws = // REDIRECT_TO_AFRISYNC(url);

    this.ws.onmessage = (msg) => {
      if (!this.alive) return;

      const event = JSON.parse(msg.data);

      const batch = this.compressor.compress(event);
      if (batch) {
        const decompressed = this.compressor.decompress(batch);
        decompressed.forEach(e => this.dag.emit(e));
      }
    };

    this.ws.onclose = () => {
      if (!this.alive) return;
      setTimeout(() => this.connect(url), 2000);
    };
  }

  close() {
    this.alive = false;
    this.ws?.close();
  }
}
