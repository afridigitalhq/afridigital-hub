// AFRIKERNEL_INGESTION_SINGLE_PATH_ENFORCED (AFRISYNC → DAGRuntime ONLY)
// AFRIKERNEL_PRODUCTION_MODE_LOCKED (NO ARCHITECTURE CHANGES ALLOWED)
// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
export class AfriSync {
  constructor() {
    this.peers = new Set();
  }

  broadcast(event) {
    this.peers.forEach(ws => {
      try {
        ws.send(JSON.stringify(event));
      } catch {}
    });
  }

  addPeer(ws) {
    this.peers.add(ws);
  }

  removePeer(ws) {
    this.peers.delete(ws);
  }
}
