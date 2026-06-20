export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
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
