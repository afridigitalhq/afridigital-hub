export class ThreatAudioEngine {
  constructor() {
    this.level = 0;
  }

  feed(signal) {
    this.level = Math.min(1, signal / 100);
  }

  getPulseIntensity() {
    return this.level;
  }
}
