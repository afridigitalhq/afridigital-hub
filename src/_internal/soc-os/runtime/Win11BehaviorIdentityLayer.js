import { Win11IdentityCurveMask } from "./Win11IdentityCurveMask";
import { Win11MicroLatencyLayer } from "./Win11MicroLatencyLayer";

export class Win11BehaviorIdentityLayer {

  constructor() {
    this.curve = new Win11IdentityCurveMask();
    this.latency = new Win11MicroLatencyLayer();
  }

  async animate(t) {
    const eased = this.curve.curve(t);
    return this.latency.apply(() => eased);
  }

}
