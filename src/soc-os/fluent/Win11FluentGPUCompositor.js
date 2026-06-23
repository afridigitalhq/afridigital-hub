export class Win11FluentGPUCompositor {

  constructor() {
    this.blur = 20;
    this.depth = 0.85;
  }

  render(window) {
    return {
      ...window,
      blur: this.blur,
      acrylic: true,
      depth: this.depth
    };
  }

}
