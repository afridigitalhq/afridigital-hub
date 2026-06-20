// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
export class ConflictResolver {
  merge(events) {
    const map = new Map();

    for (const e of events) {
      const existing = map.get(e.id);

      if (!existing || e.ts > existing.ts) {
        map.set(e.id, e);
      }
    }

    return Array.from(map.values());
  }
}
