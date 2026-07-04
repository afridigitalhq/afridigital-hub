export class GhostHeatmapEngine {
  constructor() {
    this.intensityMap = new Map();
  }

  ingestGhosts(ghosts) {
    this.intensityMap.clear();

    ghosts.forEach(g => {
      const key = g.source || "unknown";

      const prev = this.intensityMap.get(key) || {
        count: 0,
        weight: 0
      };

      const weight =
        g.ghostType === "DUPLICATE_SHADOW" ? 3 :
        g.ghostType === "SILENT_RUNTIME" ? 2 :
        g.ghostType === "ORPHAN_STREAM" ? 2 :
        1;

      this.intensityMap.set(key, {
        count: prev.count + 1,
        weight: prev.weight + weight
      });
    });
  }

  getHeatmap() {
    return Array.from(this.intensityMap.entries()).map(([node, data]) => {
      const intensity = data.weight * Math.log(data.count + 1);

      return {
        node,
        intensity,
        level:
          intensity > 20 ? "CRITICAL" :
          intensity > 10 ? "HIGH" :
          intensity > 5 ? "MEDIUM" : "LOW"
      };
    });
  }
}
