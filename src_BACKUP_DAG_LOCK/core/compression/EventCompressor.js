export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
export class EventCompressor {
  compress(event) {
    return {
      t: event.type,
      i: event.id,
      p: event.payload,
      ts: event.ts || Date.now()
    };
  }
}
