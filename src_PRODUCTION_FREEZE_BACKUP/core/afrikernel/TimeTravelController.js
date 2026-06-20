// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// AFRISYNC_ONLY_INGRESS_LAYER
// REPLAY_IS_SINGLE_SOURCE_OF_TRUTH
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
// TIME_TRAVEL_KERNEL_CONTROLLED
export class TimeTravelController {
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
