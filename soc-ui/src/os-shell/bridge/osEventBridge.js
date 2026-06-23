import { OSState } from "../state/osState";

export class OSEventBridge {
  constructor() {
    this.listeners = [];
  }

  bindStream(wsStream) {
    wsStream.onmessage = (msg) => {
      const event = JSON.parse(msg.data);
      this.route(event);
    };
  }

  route(event) {
    // SOC EVENT ROUTING LAYER (SAFE - NO EXECUTION)

    if (event.type === "ANOMALY") {
      OSState.panic = true;
    }

    if (event.type === "FORECAST") {
      OSState.mode = "PREDICT";
    }

    if (event.type === "ATTACK") {
      OSState.panic = true;
    }

    this.listeners.forEach(fn => fn(event));
  }

  subscribe(fn) {
    this.listeners.push(fn);
  }
}
