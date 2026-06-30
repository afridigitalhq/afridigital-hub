export class SOCSnapEngine {
  constructor() {
    this.zones = {
      left: { x: 0, y: 0, w: 0.5, h: 1 },
      right: { x: 0.5, y: 0, w: 0.5, h: 1 },
      full: { x: 0, y: 0, w: 1, h: 1 }
    };
  }

  snap(window, zone) {
    const z = this.zones[zone] || this.zones.full;
    return {
      ...window,
      x: z.x,
      y: z.y,
      w: z.w,
      h: z.h
    };
  }
}
