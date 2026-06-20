export class InteractiveEdgeEngine {
  constructor(afriScan) {
    this.afriScan = afriScan;
  }

  buildEdge(edge, onInspect) {
    return {
      ...edge,

      // 🧠 CLICK HOOK
      onClick: () => {
        const analysis = this.afriScan.analyzeNode(edge.target);

        onInspect?.({
          type: "EDGE_INSPECTION",
          edge,
          analysis
        });
      }
    };
  }

  enrich(edges, onInspect) {
    return edges.map(e => this.buildEdge(e, onInspect));
  }
}
