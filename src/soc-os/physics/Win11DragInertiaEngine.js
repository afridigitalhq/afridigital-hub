export class Win11DragInertiaEngine {

  applyDrag(vx, vy) {
    return {
      vx: vx * 0.92,
      vy: vy * 0.92,
      friction: "win11_like_inertia"
    };
  }

}
