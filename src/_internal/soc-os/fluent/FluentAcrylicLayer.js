export class FluentAcrylicLayer {
  constructor() {
    this.blur = 20;
    this.opacity = 0.65;
  }

  apply(element) {
    if (!element) return;

    element.style.backdropFilter = `blur(${this.blur}px)`;
    element.style.background = `rgba(255,255,255,${this.opacity})`;
    element.style.border = "1px solid rgba(255,255,255,0.2)";
    element.style.boxShadow = "0 8px 32px rgba(0,0,0,0.15)";
  }
}
