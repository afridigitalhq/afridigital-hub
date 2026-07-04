// AFRIKERNEL_INGESTION_SINGLE_PATH_ENFORCED (AFRISYNC → DAGRuntime ONLY)
// AFRIKERNEL_PRODUCTION_MODE_LOCKED (NO ARCHITECTURE CHANGES ALLOWED)
// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// AFRISYNC_ONLY_INGRESS_LAYER
// REPLAY_IS_SINGLE_SOURCE_OF_TRUTH
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
// TIME_TRAVEL_KERNEL_CONTROLLED
export class TimeTravelDebugger {
  constructor(dagRuntime) {
    this.dag = dagRuntime;
    this.snapshots = [];
    this.currentIndex = -1;
  }

  // capture full DAG state
  snapshot(label = "") {
    const state = {
      ts: Date.now(),
      label,
      nodes: JSON.parse(JSON.stringify(this.dag.getGraph())),
      edges: JSON.parse(JSON.stringify(this.dag.edges || []))
    };

    this.snapshots.push(state);
    this.currentIndex = this.snapshots.length - 1;

    return state;
  }

  // rollback to snapshot index
  rollback(index) {
    if (index < 0 || index >= this.snapshots.length) return null;

    this.currentIndex = index;
    const snap = this.snapshots[index];

    this.dag.nodes = new Map(
      snap.nodes.map((n, i) => [n.id || i, n])
    );

    this.dag.edges = snap.edges;

    return snap;
  }

  // replay up to time index
  replayTo(index) {
    return this.snapshots.slice(0, index + 1);
  }

  latest() {
    return this.snapshots[this.snapshots.length - 1];
  }
}
