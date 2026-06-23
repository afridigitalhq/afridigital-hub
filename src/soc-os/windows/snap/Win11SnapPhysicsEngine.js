export class Win11SnapPhysicsEngine {
  constructor() {
    this.margin = 32;
  }

  resolve(win, screen) {
    const halfX = screen.width / 2;
    const halfY = screen.height / 2;

    if (win.x < this.margin) win.x = 0;
    if (win.y < this.margin) win.y = 0;

    if (win.x > halfX - this.margin) win.x = halfX;
    if (win.y > halfY - this.margin) win.y = halfY;

    return {
      ...win,
      snapped: true,
      zone: win.x < halfX ? "left" : "right"
    };
  }
}
