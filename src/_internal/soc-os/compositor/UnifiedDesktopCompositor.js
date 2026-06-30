export class UnifiedDesktopCompositor {
  render(state) {
    return {
      windows: state.windows.map(w => ({
        ...w,
        blur: true,
        acrylic: true,
        depth: w.zIndex || 0
      })),
      taskbar: {
        active: state.activeWindow,
        glow: true
      },
      startMenu: state.startOpen
    };
  }
}
