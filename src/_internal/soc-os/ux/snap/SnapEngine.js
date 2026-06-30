export class SnapEngine {
  constructor() {
    this.zones = {
      left: { x: 0, y: 0, w: 0.5, h: 1 },
      right: { x: 0.5, y: 0, w: 0.5, h: 1 },
      full: { x: 0, y: 0, w: 1, h: 1 }
    };
  }

  detectSnap(x, y, screenW, screenH) {
    const px = x / screenW;

    if (px < 0.2) return "left";
    if (px > 0.8) return "right";
    return null;
  }

  applySnap(window, zone) {
    if (!this.zones[zone]) return window;

    const z = this.zones[zone];

    return {
      ...window,
      x: z.x,
      y: z.y,
      w: z.w,
      h: z.h,
      snapped: true
    };
  }
}
