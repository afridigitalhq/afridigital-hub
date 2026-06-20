// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
export class EventCompressionV2 {
  encode(event) {
    return btoa(JSON.stringify(event));
  }

  decode(packet) {
    return JSON.parse(atob(packet));
  }

  compress(event) {
    return this.encode(event);
  }

  decompress(packet) {
    return this.decode(packet);
  }
}
