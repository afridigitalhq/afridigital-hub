// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
export class BinaryWS {
  constructor(ws) {
    this.ws = ws;
  }

  encode(event) {
    return new TextEncoder().encode(JSON.stringify(event));
  }

  decode(buffer) {
    return JSON.parse(new TextDecoder().decode(buffer));
  }

  send(event) {
    this.ws.send(this.encode(event));
  }
}
