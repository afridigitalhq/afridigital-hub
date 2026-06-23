export class SOCVoiceGovernor {
  constructor({ orchestrator, narrator }) {
    this.orchestrator = orchestrator;
    this.narrator = narrator;
    this.interruptQueue = [];
    this.isMuted = false;
  }

  emit(event) {
    if (this.isMuted) return;

    this.narrator.speak(
      this.format(event)
    );
  }

  format(event) {
    return `[SOC] ${event.type}: ${event.message || "system update"}`;
  }

  interrupt(command) {
    this.interruptQueue.push(command);

    this.orchestrator.override({
      source: "ADMIN_VOICE_INTERRUPT",
      payload: command
    });

    this.narrator.speak(
      `Override received. Executing directive: ${command.action || command}`
    );
  }

  mute() {
    this.isMuted = true;
  }

  unmute() {
    this.isMuted = false;
  }
}
