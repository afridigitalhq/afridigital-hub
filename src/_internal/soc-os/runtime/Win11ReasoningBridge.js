import { SOCSelfReasoningLayer } from "../reasoning/SOCSelfReasoningLayer";

export class Win11ReasoningBridge {

  constructor(runtime) {
    this.engine = new SOCSelfReasoningLayer(runtime);
  }

  tick(context) {
    return this.engine.suggest(context);
  }

}
