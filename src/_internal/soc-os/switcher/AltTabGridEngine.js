export class AltTabGridEngine {

  build(windows = []) {
    return windows.map((w, i) => ({
      id: i,
      title: w.title || "window",
      active: w.active || false,
      preview: true
    }));
  }

  focus(index, windows) {
    return windows.map((w, i) => ({
      ...w,
      active: i === index
    }));
  }
}
