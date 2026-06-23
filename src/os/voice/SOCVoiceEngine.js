export class SOCVoiceEngine {
  constructor(spine, interrupt) {
    this.spine = spine;
    this.interrupt = interrupt;
  }

  listen(command) {
    const normalized = command.toLowerCase();

    if (normalized.includes("fail")) {
      return this.interrupt({ type: "FAILURE", payload: { source: "voice" } });
    }

    if (normalized.includes("interrupt")) {
      return this.interrupt({ type: "INTERRUPT", payload: { source: "voice" } });
    }

    this.spine.publish({
      type: "VOICE_COMMAND",
      payload: { command }
    });
  }
}
