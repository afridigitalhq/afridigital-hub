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
