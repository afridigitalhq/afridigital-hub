export class AltTab3DGridEngine {
  constructor() {
    this.index = 0;
  }

  open(windows) {
    return {
      mode: "ALT_TAB_3D_GRID",
      cards: windows.map((w, i) => ({
        id: w.id,
        title: w.title,
        depth: i * -20,
        scale: i === this.index ? 1.1 : 0.9
      }))
    };
  }

  next() {
    this.index++;
    return this.index;
  }
}
