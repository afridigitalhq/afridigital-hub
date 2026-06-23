export class FluentCompositor {
  constructor() {
    this.blurMap = new Map();
  }

  register(id) {
    this.blurMap.set(id, {
      blur: 0,
      tint: "rgba(255,255,255,0.06)",
      depth: 1
    });
  }

  focus(id) {
    for (const [key, w] of this.blurMap.entries()) {
      if (key === id) {
        w.blur = 0;
        w.tint = "rgba(255,255,255,0.12)";
        w.depth = 10;
      } else {
        w.blur = 14;
        w.tint = "rgba(255,255,255,0.04)";
        w.depth = 1;
      }
    }
  }

  getStyle(id) {
    const w = this.blurMap.get(id);
    if (!w) return {};

    return {
      backdropFilter: `blur(${w.blur}px) saturate(140%)`,
      background: w.tint,
      transform: `scale(${w.depth === 10 ? 1 : 0.98})`
    };
  }
}
