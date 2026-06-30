import { Win11FluentGPUCompositor } from "../fluent/Win11FluentGPUCompositor";
import { Win11FrameCompositorSync } from "../fluent/Win11FrameCompositorSync";
import { Win11DragInertiaEngine } from "../physics/Win11DragInertiaEngine";
import { Win11AltTabBlurInterpolation } from "../windows/switcher/Win11AltTabBlurInterpolation";
import { Win11SessionPersistenceEngine } from "../session/state/Win11SessionPersistenceEngine";
import { Win11ProactiveDesktopBrain } from "../ai/Win11ProactiveDesktopBrain";

export class Win11OSOrchestrator {

  constructor() {
    this.compositor = new Win11FluentGPUCompositor();
    this.sync = new Win11FrameCompositorSync();
    this.physics = new Win11DragInertiaEngine();
    this.switcher = new Win11AltTabBlurInterpolation();
    this.session = new Win11SessionPersistenceEngine();
    this.brain = new Win11ProactiveDesktopBrain();
  }

  tick(window) {
    const gpu = this.compositor.render(window);
    const synced = this.sync.tick(gpu);
    return synced;
  }

}
