import { OSBootFlow } from "../bootflow/OSBootFlow";
import { SessionRestoreEngine } from "../session/SessionRestoreEngine";
import { DesktopRehydrationEngine } from "../resume/DesktopRehydrationEngine";

export class OSImmersionController {

  constructor() {
    this.boot = new OSBootFlow();
    this.session = new SessionRestoreEngine();
    this.rehydrate = new DesktopRehydrationEngine();
  }

  start() {
    return {
      bootStage: this.boot.getStage(),
      windows: this.session.restore()
    };
  }

  advanceBoot() {
    return this.boot.next();
  }

  restoreDesktop() {
    const windows = this.session.restore();
    return this.rehydrate.hydrate(windows);
  }
}
