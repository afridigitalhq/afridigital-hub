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
