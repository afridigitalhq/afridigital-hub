// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
export const AfriSync = {
  peers: [],

  broadcast(event) {
    this.peers.forEach(p => {
      try { p.send(JSON.stringify(event)); } catch {}
    });
  },

  attach(socket) {
    this.peers.push(socket);
  }
};
