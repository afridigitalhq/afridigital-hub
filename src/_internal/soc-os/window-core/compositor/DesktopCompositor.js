export class DesktopCompositor {
  apply(windows, activeId) {
    return Array.from(windows.values()).map(w => ({
      ...w,
      blur: w.id === activeId ? 0 : 10,
      opacity: w.id === activeId ? 1 : 0.85,
      scale: w.id === activeId ? 1 : 0.98
    }));
  }
}
