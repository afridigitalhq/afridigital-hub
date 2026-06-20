export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
export class GraphDiff {
  diff(prev, next) {
    const prevIds = new Set(prev.nodes.map(n => n.id));
    const nextIds = new Set(next.nodes.map(n => n.id));

    return {
      added: next.nodes.filter(n => !prevIds.has(n.id)),
      removed: prev.nodes.filter(n => !nextIds.has(n.id))
    };
  }
}
