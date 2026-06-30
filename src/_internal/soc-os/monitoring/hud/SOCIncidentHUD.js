export class SOCIncidentHUD {

  constructor(runtime) {
    this.runtime = runtime;
    this.incidents = [];
    this.metrics = {
      lag: 0,
      frameDrops: 0,
      duplicateComponents: []
    };
  }

  scan() {
    const tree = this.runtime?.getComponentTree?.() || [];

    this.detectDuplicates(tree);
    this.detectLag();
    this.detectRenderHealth();

    return this.incidents;
  }

  detectDuplicates(tree) {
    const map = new Map();

    tree.forEach(node => {
      const key = node.name;
      map.set(key, (map.get(key) || 0) + 1);
    });

    map.forEach((count, key) => {
      if (count > 1) {
        this.incidents.push({
          type: "DUPLICATE_COMPONENT",
          severity: "medium",
          message: `${key} mounted ${count} times`
        });
      }
    });
  }

  detectLag() {
    if (this.metrics.lag > 16.67) {
      this.incidents.push({
        type: "RENDER_LAG",
        severity: "high",
        message: `Frame lag detected: ${this.metrics.lag}ms`
      });
    }
  }

  detectRenderHealth() {
    if (this.metrics.frameDrops > 0) {
      this.incidents.push({
        type: "FRAME_DROP",
        severity: "low",
        message: `Dropped frames: ${this.metrics.frameDrops}`
      });
    }
  }

  report() {
    return {
      timestamp: Date.now(),
      incidents: this.incidents,
      status: this.incidents.length === 0 ? "HEALTHY" : "DEGRADED"
    };
  }

}
