import { ClusterBus } from "../ws/ClusterBus";
import { DistributedDAG } from "../dag/DistributedDAG";
import { ConsensusEngine } from "../consensus/ConsensusEngine";

export class ClusterSyncEngine {
  constructor(wsUrl) {
    this.bus = new ClusterBus(wsUrl);
    this.dag = new DistributedDAG();
    this.consensus = new ConsensusEngine();

    this.bus.on("*", (event) => {
      this.consensus.receive(event);
    });
  }

  emit(event) {
    this.bus.send(event);
    this.dag.apply(event);
  }

  tick() {
    const batch = this.consensus.flush();
    batch.forEach(e => this.dag.apply(e));

    return this.dag.snapshot();
  }
}
