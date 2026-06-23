export class SOCKernelUnified {

  constructor({
    windowManager,
    compositor,
    eventLoop,
    sessionEngine,
    aiBrain
  }) {

    this.windowManager = windowManager;
    this.compositor = compositor;
    this.eventLoop = eventLoop;
    this.sessionEngine = sessionEngine;
    this.aiBrain = aiBrain;

    this.state = {
      running: false,
      focusedWindow: null,
      activeWorkspace: "main",
      bootStage: "init"
    };
  }

  boot() {
    this.state.running = true;
    this.state.bootStage = "desktop-ready";

    this.eventLoop?.start?.();

    return "SOC_KERNEL_UNIFIED_ACTIVE";
  }

  openWindow(app) {
    return this.windowManager.create(app);
  }

  focusWindow(id) {
    this.state.focusedWindow = id;
    this.compositor?.focus?.(id);
  }

  switchWorkspace(ws) {
    this.state.activeWorkspace = ws;
    return ws;
  }

  snapshot() {
    return this.sessionEngine?.capture?.() || null;
  }

  tick(event) {
    // SINGLE OS EVENT PIPELINE
    this.aiBrain?.observe?.(event);
    this.compositor?.render?.(event);
    this.eventLoop?.tick?.(event);
  }

  getState() {
    return this.state;
  }
}
