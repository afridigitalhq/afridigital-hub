export class Win11IdentityCurveMask {

  curve(t) {
    // Windows 11-like easing illusion (not exact math, perceptual match)
    return 1 - Math.pow(1 - t, 3.2);
  }

}
