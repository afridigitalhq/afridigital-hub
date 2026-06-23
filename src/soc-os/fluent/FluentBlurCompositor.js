export class FluentBlurCompositor {
  constructor() {
    this.blur = 18;
    this.opacity = 0.72;
  }

  applyStyle(window) {
    return {
      ...window,
      style: {
        backdropFilter: `blur(${this.blur}px)`,
        background: `rgba(255,255,255,${this.opacity})`
      }
    };
  }
}
