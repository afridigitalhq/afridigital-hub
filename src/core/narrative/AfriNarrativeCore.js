export class AfriNarrativeCore {
  constructor(bridge, voice) {
    this.bridge = bridge;
    this.voice = voice;
  }

  init() {
    this.bridge.init();
    this.bridge.narrator = {
      emit: (n) => this.voice.speak(n)
    };
  }
}
