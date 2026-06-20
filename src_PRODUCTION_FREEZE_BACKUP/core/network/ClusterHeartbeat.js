// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
export class ClusterHeartbeat {
  constructor(cluster) {
    this.cluster = cluster;
    this.interval = null;
  }

  start() {
    this.interval = setInterval(() => {
      for (const [id, ws] of this.cluster.peers) {
        try {
          ws.send(JSON.stringify({
            type: "HEARTBEAT",
            node: this.cluster.nodeId,
            clock: this.cluster.vectorClock
          }));
        } catch {
          this.cluster.disconnectPeer(id);
        }
      }
    }, 2000);
  }

  stop() {
    clearInterval(this.interval);
  }
}
