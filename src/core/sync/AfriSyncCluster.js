// AFRIKERNEL_INGESTION_SINGLE_PATH_ENFORCED (AFRISYNC → DAGRuntime ONLY)
// AFRIKERNEL_PRODUCTION_MODE_LOCKED (NO ARCHITECTURE CHANGES ALLOWED)
// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
// DETERMINISTIC_RENDERER_V2_ACTIVE
export class AfriSyncCluster {
  constructor(nodeId) {
    this.nodeId = nodeId;
    this.peers = new Map(); // nodeId -> ws
    this.seenEvents = new Set();
    this.vectorClock = {};
  }

  connectPeer(nodeId, ws) {
    this.peers.set(nodeId, ws);
    this.vectorClock[nodeId] = this.vectorClock[nodeId] || 0;
  }

  disconnectPeer(nodeId) {
    this.peers.delete(nodeId);
  }

  incrementClock() {
    this.vectorClock[this.nodeId] = (this.vectorClock[this.nodeId] || 0) + 1;
    return this.vectorClock;
  }

  // 🔴 core replication function
  broadcast(event) {
    if (this.seenEvents.has(event.id)) return;
    this.seenEvents.add(event.id);

    const payload = {
      ...event,
      origin: this.nodeId,
      clock: this.incrementClock()
    };

    for (const ws of this.peers.values()) {
      try {
        ws.send(JSON.stringify(payload));
      } catch {}
    }
  }

  // 🔵 ingestion from cluster
  ingest(event, dag) {
    if (this.seenEvents.has(event.id)) return null;
    this.seenEvents.add(event.id);

    // causal ordering enforcement
    if (event.dependsOn) {
      const exists = dag.nodes.has(event.dependsOn);
      if (!exists) return null; // wait for dependency
    }

    // FROZEN_DAG_INGEST(event);
    return event;
  }
}
