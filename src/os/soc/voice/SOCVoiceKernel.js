export class SOCVoiceKernel {
  constructor({ narrator, orchestrator, dag }) {
    this.narrator = narrator;
    this.orchestrator = orchestrator;
    this.dag = dag;

    this.muted = false;
    this.priorityQueue = [];
  }

  speak(event, level = "info") {
    if (this.muted && level !== "critical") return;

    const message = this._format(event, level);

    this.narrator?.speak?.({
      text: message,
      level,
      source: "SOC"
    });
  }

  _format(event, level) {
    return `[SOC:${level}] ${event?.type || "event"} → ${event?.summary || "processing system state"}`;
  }

  // 🔴 ADMIN INTERRUPT LANE
  interrupt(command) {
    if (command?.type === "MUTE_ALL") {
      this.muted = true;
    }

    if (command?.type === "UNMUTE_ALL") {
      this.muted = false;
    }

    if (command?.type === "FORCE_NARRATE") {
      this.speak(command.payload, "critical");
    }

    if (command?.type === "OVERRIDE") {
      this.orchestrator?.handle?.(command.payload);
    }

    return true;
  }

  // 🟡 Event Commentary Lane
  explain(event) {
    this.speak({
      type: "EXPLANATION",
      summary: `Root cause analysis triggered for ${event?.type}`
    }, "warning");
  }
}
