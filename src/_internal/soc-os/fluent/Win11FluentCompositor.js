export class Win11FluentCompositor {
  constructor() {
    this.blur = 18;
    this.opacity = 0.72;
  }

  apply(window) {
    return {
      ...window,
      style: {
        backdropFilter: `blur(${this.blur}px)`,
        background: `rgba(255,255,255,${this.opacity})`,
        border: "1px solid rgba(255,255,255,0.2)"
      }
    };
  }
}
