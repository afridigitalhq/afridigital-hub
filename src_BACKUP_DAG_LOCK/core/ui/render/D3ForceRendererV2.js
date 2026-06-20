export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
// DETERMINISTIC_RENDERER_V2_ACTIVE
import * as d3 from "d3";

export class D3ForceRendererV2 {
  constructor(svgRef) {
    this.svgRef = svgRef;
    this.simulation = null;
  }

  update(graph) {
    if (!this.simulation) {
      this.simulation = d3.forceSimulation(graph.nodes)
        .force("charge", d3.forceManyBody().strength(-120))
        .force("link", d3.forceLink(graph.edges).id(d => d.id))
        .force("center", d3.forceCenter(250, 150));
    } else {
      this.simulation.nodes(graph.nodes);
      this.simulation.force("link").links(graph.edges);
      this.simulation.alpha(0.6).restart();
    }
  }

  render() {
    return this.simulation?.nodes() || [];
  }
}
