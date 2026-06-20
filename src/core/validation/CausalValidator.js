// AFRIKERNEL_INGESTION_SINGLE_PATH_ENFORCED (AFRISYNC → DAGRuntime ONLY)
// AFRIKERNEL_PRODUCTION_MODE_LOCKED (NO ARCHITECTURE CHANGES ALLOWED)
// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
export class CausalValidator {
  validate(event, dag) {
    if (!event.id) return false;

    // detect circular dependency
    const visited = new Set();
    const stack = new Set();

    const dfs = (nodeId) => {
      if (stack.has(nodeId)) return false;
      if (visited.has(nodeId)) return true;

      stack.add(nodeId);

      const edges = dag.edges.filter(e => e.source === nodeId);
      for (const e of edges) {
        if (!dfs(e.target)) return false;
      }

      stack.delete(nodeId);
      visited.add(nodeId);
      return true;
    };

    return dfs(event.id);
  }
}
