export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
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
