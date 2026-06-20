// AFRIKERNEL_INGESTION_SINGLE_PATH_ENFORCED (AFRISYNC → DAGRuntime ONLY)
// AFRIKERNEL_PRODUCTION_MODE_LOCKED (NO ARCHITECTURE CHANGES ALLOWED)
// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
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
