export class Win11AltTab3DGrid {

  constructor() {
    this.duration = 220; // Win11-like fast animation feel
  }

  switch(windows, activeIndex) {
    return windows.map((w, i) => ({
      ...w,
      scale: i === activeIndex ? 1 : 0.92,
      z: i === activeIndex ? 100 : i,
      opacity: i === activeIndex ? 1 : 0.6
    }));
  }
}
