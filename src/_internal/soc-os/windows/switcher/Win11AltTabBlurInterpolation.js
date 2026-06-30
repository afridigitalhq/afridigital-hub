export class Win11AltTabBlurInterpolation {

  interpolate(windows) {
    return windows.map((w, i) => ({
      ...w,
      blur: i * 2,
      scale: 1 - i * 0.05,
      z: 100 - i
    }));
  }

}
