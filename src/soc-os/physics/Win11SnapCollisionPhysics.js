export class Win11SnapCollisionPhysics {

  constructor() {
    this.edgeResistance = 12;
    this.snapZones = 4;
  }

  apply(window, bounds) {

    const left = window.x <= this.edgeResistance;
    const right = window.x >= bounds.width - this.edgeResistance;
    const top = window.y <= this.edgeResistance;

    if (left) window.x = 0;
    if (right) window.x = bounds.width - window.width;
    if (top) window.y = 0;

    return {
      ...window,
      snapped: left || right || top
    };
  }
}
