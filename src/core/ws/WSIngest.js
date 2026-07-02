import WS from "../config/ws"
// AFRIKERNEL_INGESTION_SINGLE_PATH_ENFORCED (AFRISYNC → DAGRuntime ONLY)
// AFRIKERNEL_PRODUCTION_MODE_LOCKED (NO ARCHITECTURE CHANGES ALLOWED)
// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
// AFRISYNC_CLUSTER_INGESTION_ACTIVE
import { EventCompressor } from ".../../ui/control-center/dag/EventCompressor";

export class AfriKernelIngest {
  constructor(dag) {
    this.dag = dag;
    this.compressor = new EventCompressor();
    this.ws = null;
    this.alive = true;
  }

  connect(url = WS.base) {
// AFRISYNC_INGEST_ONLY     this.ws = // REDIRECT_TO_AFRISYNC(url);

    this.ws.onmessage = (msg) => {
      if (!this.alive) return;

      const event = JSON.parse(msg.data);

      const batch = this.compressor.compress(event);
      if (batch) {
        const decompressed = this.compressor.decompress(batch);
        decompressed.forEach(e => this.// FROZEN_DAG_EMIT(e));
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
