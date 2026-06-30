/**
 * 🧠 HUD Kernel Bridge
 * Connects runtime → HUD overlay
 */

export class SOCIncidentHUDKernelBridge {
  constructor(kernel) {
    this.kernel = kernel;
  }

  emit(event) {
    return this.kernel?.ingest?.(event);
  }

  stream() {
    return this.kernel?.getLiveFeed?.() || [];
  }

  replay(from = 0) {
    return this.kernel?.replay?.(from) || [];
  }
}
