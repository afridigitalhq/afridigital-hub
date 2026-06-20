// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
// DETERMINISTIC_RENDERER_V2_ACTIVE
export class RendererV2 {
  constructor(forceEngine) {
    this.force = forceEngine;
  }

  render(state) {
    const { nodes, edges } = state;

    // deterministic layout step
    const layout = this.force.step(nodes, edges);

    return {
      nodes: layout.nodes,
      edges: layout.edges
    };
  }
}
