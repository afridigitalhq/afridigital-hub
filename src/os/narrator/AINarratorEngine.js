export class AINarratorEngine {
  constructor({ os, voiceEnabled = false }) {
    this.os = os;
    this.voiceEnabled = voiceEnabled;
    this.mode = "SOC"; // SOC | BUSINESS
  }

  setMode(mode) {
    this.mode = mode; // switch SOC <-> BUSINESS
  }

  enableVoice(flag) {
    this.voiceEnabled = flag;
  }

  speak(text) {
    if (!this.voiceEnabled) return;

    if (typeof window !== "undefined" && window.speechSynthesis) {
      const msg = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(msg);
    }
  }

  // 🧠 SYSTEM EVENTS (SOC MODE)
  narrateSystemEvent(event) {
    if (this.mode !== "SOC") return;

    const message = this._formatSOC(event);

    console.log("[SOC NARRATOR]", message);
    this.speak(message);

    return message;
  }

  // 💼 USER EVENTS (BUSINESS MODE)
  narrateBusinessEvent(context) {
    if (this.mode !== "BUSINESS") return;

    const message = this._formatBusiness(context);

    console.log("[BUSINESS NARRATOR]", message);
    this.speak(message);

    return message;
  }

  _formatSOC(event) {
    return `System alert: ${event.type}. ${event.message || "No additional context."}`;
  }

  _formatBusiness(context) {
    return `Dashboard update: ${context.message || "System is operating normally."}`;
  }
}
