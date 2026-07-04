export class VoiceSynthesisLayer {
  constructor(voiceEngine) {
    this.voice = voiceEngine;
  }

  speak(narration) {
    if (narration?.text) {
      this.voice?.say?.(narration.text);
    }
  }
}
