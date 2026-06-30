export class DesktopRehydrationEngine {

  hydrate(windows = []) {
    return windows.map((w, i) => ({
      ...w,
      restored: true,
      animationDelay: i * 120
    }));
  }
}
