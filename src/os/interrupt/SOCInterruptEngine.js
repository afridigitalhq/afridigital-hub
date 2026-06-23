export class SOCInterruptEngine {
  constructor(spine) {
    this.spine = spine;
    this.queue = [];
  }

  classify(event) {
    if (event?.type === "FAILURE") return "CRITICAL";
    if (event?.type === "DAG_ALERT") return "HIGH";
    return "NORMAL";
  }

  interrupt(event) {
    const level = this.classify(event);

    const packet = { level, event };

    this.queue.push(packet);

    this.spine.publish({
      type: "INTERRUPT_EVENT",
      payload: packet
    });

    return packet;
  }
}
