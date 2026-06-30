import { Windows11PolishEngine } from "./Windows11PolishEngine";

export class OSFinalEnhancer {

  constructor() {
    this.engine = new Windows11PolishEngine();
  }

  enhanceWindow(window) {
    return this.engine.style(window);
  }

  enhanceDesktop(state) {
    return this.engine.snapEffect(state);
  }
}
