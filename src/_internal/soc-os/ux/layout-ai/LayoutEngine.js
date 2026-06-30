export class LayoutEngine {
  arrange(windows, context = "warroom") {
    if (context === "warroom") {
      return windows.map((w, i) => ({
        ...w,
        x: (i % 3) * 0.3,
        y: Math.floor(i / 3) * 0.3
      }));
    }

    if (context === "admin") {
      return windows.map((w, i) => ({
        ...w,
        x: 0.1 + i * 0.2,
        y: 0.2
      }));
    }

    return windows;
  }
}
