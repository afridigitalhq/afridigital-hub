export class SnapCollisionEngine {
  constructor() {
    this.edge = 32;
  }

  resolve(window, screen, windows = []) {
    // edge snapping
    if (window.x <= this.edge) window.x = 0;
    if (window.y <= this.edge) window.y = 0;

    // right snap
    if (window.x + window.w >= screen.w - this.edge) {
      window.x = screen.w - window.w;
    }

    // bottom snap
    if (window.y + window.h >= screen.h - this.edge) {
      window.y = screen.h - window.h;
    }

    // collision avoidance (light physics)
    windows.forEach(w => {
      if (w.id !== window.id) {
        const overlap =
          window.x < w.x + w.w &&
          window.x + window.w > w.x &&
          window.y < w.y + w.h &&
          window.y + window.h > w.y;

        if (overlap) {
          window.x += 10;
          window.y += 10;
        }
      }
    });

    return window;
  }
}
