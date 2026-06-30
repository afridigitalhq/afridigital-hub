export class FluentCompositor {
  constructor() {
    this.blur = 18;
    this.opacity = 0.72;
    this.roundness = 14;
  }

  apply(style = {}) {
    return {
      ...style,
      backdropFilter: `blur(${this.blur}px)`,
      backgroundColor: `rgba(20,20,20,${this.opacity})`,
      borderRadius: `${this.roundness}px`,
      transition: "all 180ms ease"
    };
  }
}
