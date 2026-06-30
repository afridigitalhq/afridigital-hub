import { Win11OSOrchestrator } from "./Win11OSOrchestrator";

export class Win11DesktopPipeline {

  constructor() {
    this.os = new Win11OSOrchestrator();
  }

  renderFrame(window) {
    return this.os.tick(window);
  }

}
