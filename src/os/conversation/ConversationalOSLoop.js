export class ConversationalOSLoop {
  constructor(spine, voice, interrupt) {
    this.spine = spine;
    this.voice = voice;
    this.interrupt = interrupt;
  }

  process(input) {
    const command = input.trim();

    // AfriAi alias routing
    if (command.startsWith("AfriAi")) {
      const cleaned = command.replace("AfriAi", "").trim();
      return this.voice.listen(cleaned);
    }

    // Interrupt routing
    if (command.includes("interrupt")) {
      return this.interrupt({ type: "INTERRUPT", payload: { source: "loop" } });
    }

    // Default conversational event
    this.spine.publish({
      type: "CONVERSATION_EVENT",
      payload: { input: command }
    });
  }
}
