export class AudioReactiveEngine {
  constructor() {
    this.intensity = 0;
  }

  update(audioLevel) {
    this.intensity = Math.min(1, audioLevel / 100);
  }

  getPulseStyle() {
    return {
      transform: `scale(${1 + this.intensity * 0.2})`,
      opacity: 0.6 + this.intensity * 0.4,
      filter: `blur(${this.intensity * 6}px)`
    };
  }
}
