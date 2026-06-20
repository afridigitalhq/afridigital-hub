// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
// DETERMINISTIC_RENDERER_V2_ACTIVE
import * as d3 from "d3-force";

export class D3ForceEngine {
  constructor(nodes, edges) {
    this.sim = d3.forceSimulation(nodes)
      .force("charge", d3.forceManyBody().strength(-200))
      .force("link", d3.forceLink(edges).id(d => d.id).distance(60))
      .force("center", d3.forceCenter(300, 200));
  }

  tick() {
    this.sim.tick();
    return this.sim.nodes();
  }

  alpha(value) {
    this.sim.alpha(value);
    return this;
  }
}
