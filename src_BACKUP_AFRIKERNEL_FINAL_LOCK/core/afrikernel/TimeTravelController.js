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
