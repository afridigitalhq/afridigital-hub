export class SOCNodeRegistry {
  constructor() {
    this.nodes = new Map();
  }

  registerNode(nodeId, metadata = {}) {
    this.nodes.set(nodeId, {
      ...metadata,
      status: "ACTIVE",
      lastSeen: Date.now()
    });
  }

  getNodes() {
    return Array.from(this.nodes.entries()).map(([id, data]) => ({
      id,
      ...data
    }));
  }

  updateHeartbeat(nodeId) {
    if (this.nodes.has(nodeId)) {
      this.nodes.get(nodeId).lastSeen = Date.now();
    }
  }
}
