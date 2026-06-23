export class SOCCluster {
  constructor() {
    this.nodes = [];
  }

  registerNode(node) {
    this.nodes.push(node);
  }

  broadcast(event) {
    return this.nodes.map(n => ({
      node: n.id,
      status: "received",
      event
    }));
  }
}
