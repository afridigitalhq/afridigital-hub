export class AltTabGridUX {
  constructor() {
    this.activeIndex = 0;
  }

  open(windows) {
    return {
      type: "ALT_TAB_GRID",
      preview: windows.map(w => ({
        id: w.id,
        title: w.title,
        thumbnail: w.snapshot || "live"
      }))
    };
  }

  switch(index) {
    this.activeIndex = index;
    return this.activeIndex;
  }
}
