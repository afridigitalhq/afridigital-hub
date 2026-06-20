import * as d3 from "d3-force";

export class ForceEngine {
  constructor(nodes, links) {
    this.nodes = nodes;
    this.links = links;

    this.simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id).distance(140))
      .force("charge", d3.forceManyBody().strength(-400))
      .force("center", d3.forceCenter(600, 300))
      .force("collision", d3.forceCollide(60));
  }

  tick(callback) {
    this.simulation.on("tick", () => {
      callback(this.nodes);
    });
  }

  updateEnergy(nodeId, intensity = 1) {
    const node = this.nodes.find(n => n.id === nodeId);
    if (!node) return;

    node.vx += (Math.random() - 0.5) * intensity;
    node.vy += (Math.random() - 0.5) * intensity;
  }
}
