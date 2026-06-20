// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
// TIME_TRAVEL_KERNEL_CONTROLLED
export class AfriKernelRuntime {
  constructor(nodeId) {
    this.nodeId = nodeId;
    this.eventLog = [];          // SINGLE SOURCE OF TRUTH
    this.peers = new Set();
  }

  // ===== INGESTION PIPELINE =====
  ingest(event) {
    const entry = {
      id: crypto.randomUUID(),
      ts: Date.now(),
      node: this.nodeId,
      data: this.compress(event)
    };

    this.eventLog.push(entry);
    return entry;
  }

  // ===== EVENT COMPRESSION =====
  compress(event) {
    return {
      t: event.type || event.t,
      d: event.data || event.d
    };
  }

  // ===== DAG REBUILD (PURE FUNCTION) =====
  buildDAG() {
    const nodes = new Map();
    const edges = [];

    for (const e of this.eventLog) {
      nodes.set(e.id, e);

      if (e.data?.parent) {
        edges.push({
          from: e.data.parent,
          to: e.id
        });
      }
    }

    return {
      nodes: Array.from(nodes.values()),
      edges
    };
  }

  // ===== TIME TRAVEL REPLAY =====
  replay(time) {
    return this.eventLog.filter(e => e.ts <= time);
  }

  // ===== CONSENSUS (SIMPLIFIED AFRAISYNC) =====
  merge(remoteLog) {
    const map = new Map();

    for (const e of [...this.eventLog, ...remoteLog]) {
      map.set(e.id, e);
    }

    this.eventLog = Array.from(map.values())
      .sort((a, b) => a.ts - b.ts);

    return this.eventLog;
  }
}
