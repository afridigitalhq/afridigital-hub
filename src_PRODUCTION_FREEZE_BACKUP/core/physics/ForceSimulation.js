// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
// DETERMINISTIC_RENDERER_V2_ACTIVE
// DISABLED_LEGACY_FORCE_SIMULATION {
  constructor(nodes = [], edges = []) {
    this.nodes = nodes;
    this.edges = edges;

    this.chargeStrength = -120;
    this.linkStrength = 0.08;
  }

  tick() {
    // CHARGE FORCE (repulsion)
    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        const a = this.nodes[i], b = this.nodes[j];

        const dx = (a.x || 0) - (b.x || 0);
        const dy = (a.y || 0) - (b.y || 0);
        const dist = Math.max(1, Math.sqrt(dx * dx + dy * dy));

        const force = this.chargeStrength / (dist * dist);

        a.x = (a.x || 0) + dx * force;
        a.y = (a.y || 0) + dy * force;
        b.x = (b.x || 0) - dx * force;
        b.y = (b.y || 0) - dy * force;
      }
    }

    // LINK FORCE (attraction)
    this.edges.forEach(e => {
      const a = this.nodes.find(n => n.id === e.source);
      const b = this.nodes.find(n => n.id === e.target);
      if (!a || !b) return;

      const dx = (b.x || 0) - (a.x || 0);
      const dy = (b.y || 0) - (a.y || 0);

      a.x += dx * this.linkStrength;
      a.y += dy * this.linkStrength;
      b.x -= dx * this.linkStrength;
      b.y -= dy * this.linkStrength;
    });

    return { nodes: this.nodes, edges: this.edges };
  }
}
