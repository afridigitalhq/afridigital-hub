import { AfriBus } from "../bus/AfriEventBus";

export class DAGSnapshotStreamer {
  constructor() {
    this.snapshots = [];
  }

  start(dag) {
    AfriBus.on("*", () => this.capture(dag));
  }

  capture(dag) {
    this.snapshots.push({
      time: Date.now(),
      nodes: dag.getNodes?.() || [],
      edges: dag.getEdges?.() || []
    });
  }

  getReplay() {
    return this.snapshots;
  }
}
