import { AfriBus } from "../bus/AfriEventBus";

export class AfriNarrationBusBridge {
  constructor(narrator) {
    this.narrator = narrator;
  }

  init() {
    AfriBus.on("*", (event) => {
      const narration = this.transform(event);
      this.narrator.emit(narration);
    });
  }

  transform(event) {
    return {
      text: this.interpret(event),
      time: Date.now(),
      type: event.type
    };
  }

  interpret(event) {
    if (event.type === "DAG_NODE_EXECUTED") return "Node executed in DAG runtime.";
    if (event.type === "GOVERNOR_INTERVENTION") return "Governor stabilized system state.";
    if (event.type === "EVENT_FLOW_SPIKE") return "High system activity detected.";
    return "System event processed.";
  }
}
