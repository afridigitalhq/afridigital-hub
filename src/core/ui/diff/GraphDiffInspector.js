export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
export class GraphDiffInspector {
  diff(prev, next) {
    const added = next.nodes.filter(n => !prev.nodes.find(p => p.id === n.id));
    const removed = prev.nodes.filter(n => !next.nodes.find(p => p.id === n.id));

    return { added, removed };
  }
}
