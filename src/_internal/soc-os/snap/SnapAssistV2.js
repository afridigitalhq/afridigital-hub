export class SnapAssistV2 {
  constructor() {
    this.margin = 24;
  }

  snap(window, bounds) {
    // left snap
    if (window.x < this.margin) window.x = 0;

    // right snap
    if (window.x > bounds.width - 400) {
      window.x = bounds.width - 400;
    }

    // top maximize hint
    if (window.y < this.margin) {
      window.x = 0;
      window.y = 0;
      window.w = bounds.width;
      window.h = bounds.height;
    }

    return window;
  }
}
