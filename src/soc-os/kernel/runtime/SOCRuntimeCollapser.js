import { SOCRuntimeRegistry } from "./SOCRuntimeRegistry";

export class SOCRuntimeCollapser {

  constructor(kernel) {
    this.kernel = kernel;
  }

  collapse() {
    const r = SOCRuntimeRegistry;

    // enforce canonical runtime mapping
    this.kernel.windowManager = r.windowManager;
    this.kernel.taskbar = r.taskbar;
    this.kernel.startMenu = r.startMenu;
    this.kernel.altTab = r.altTab;
    this.kernel.compositor = r.compositor;
    this.kernel.session = r.session;
    this.kernel.ai = r.ai;
    this.kernel.eventLoop = r.eventLoop;

    return {
      status: "RUNTIME_COLLAPSED",
      canonical: r
    };
  }

  validate(moduleName) {
    return !SOCRuntimeRegistry.shadowBlacklist.includes(moduleName);
  }
}
