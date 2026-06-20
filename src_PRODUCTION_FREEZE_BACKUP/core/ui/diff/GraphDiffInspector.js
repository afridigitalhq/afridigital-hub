// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
export class GraphDiffInspector {
  diff(prev, next) {
    const added = next.nodes.filter(n => !prev.nodes.find(p => p.id === n.id));
    const removed = prev.nodes.filter(n => !next.nodes.find(p => p.id === n.id));

    return { added, removed };
  }
}
