export class ArchitectureMapEngine {
  constructor() {
    this.nodes = new Map();
    this.edges = [];
  }

  ingest(event) {
    const source = event.source || "unknown";
    const target = event.target || "unknown";

    this.nodes.set(source, (this.nodes.get(source) || 0) + 1);
    this.nodes.set(target, (this.nodes.get(target) || 0) + 1);

    this.edges.push({ source, target, type: event.type });
  }

  buildGraph() {
    return {
      nodes: Array.from(this.nodes.entries()).map(([id, weight]) => ({
        id,
        weight,
        size: Math.min(50, weight)
      })),
      edges: this.edges.slice(-500)
    };
  }
}
