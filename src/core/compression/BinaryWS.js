// AFRIKERNEL_INGESTION_SINGLE_PATH_ENFORCED (AFRISYNC → DAGRuntime ONLY)
// AFRIKERNEL_PRODUCTION_MODE_LOCKED (NO ARCHITECTURE CHANGES ALLOWED)
// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
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
