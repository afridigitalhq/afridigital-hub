export class Windows11PolishEngine {

  constructor() {
    this.blur = 22;
    this.roundness = 16;
    this.animation = "fluent";
  }

  style(window) {
    return {
      ...window,
      backdropFilter: `blur(${this.blur}px)`,
      borderRadius: `${this.roundness}px`,
      transition: "all 180ms cubic-bezier(0.2, 0.8, 0.2, 1)"
    };
  }

  snapEffect(state) {
    return {
      ...state,
      glow: true,
      shadow: "0 20px 60px rgba(0,0,0,0.4)"
    };
  }
}
