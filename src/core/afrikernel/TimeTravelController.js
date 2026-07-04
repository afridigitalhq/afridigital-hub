// AFRIKERNEL_INGESTION_SINGLE_PATH_ENFORCED (AFRISYNC → DAGRuntime ONLY)
// AFRIKERNEL_PRODUCTION_MODE_LOCKED (NO ARCHITECTURE CHANGES ALLOWED)
// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// AFRISYNC_ONLY_INGRESS_LAYER
// REPLAY_IS_SINGLE_SOURCE_OF_TRUTH
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
// TIME_TRAVEL_KERNEL_CONTROLLED
export class AFRI_STATE_PROXYController {
  constructor(kernel) {
    this.kernel = kernel;
    this.index = 0;
  }

  scrub(index) {
    this.index = index;
    return this.kernel.replay(index);
  }

  play(speed = 1) {
    let i = 0;
    const tick = () => {
      if (i >= this.kernel.eventLog.length) return;
      this.kernel.replay(i);
      i += speed;
      requestAnimationFrame(tick);
    };
    tick();
  }
}
