export class Win11PointerAcceleration {

  curve(x, y) {
    return {
      x: x * 1.08,
      y: y * 1.08,
      easing: "windows11_pointer_curve",
      inertia: true
    };
  }

}
