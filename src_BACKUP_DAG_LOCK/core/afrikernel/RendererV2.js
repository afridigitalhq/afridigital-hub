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
