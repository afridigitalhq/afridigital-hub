export const SOCRuntimeRegistry = {

  windowManager: "SOCDesktopShell",
  taskbar: "SOCWin11Taskbar",
  startMenu: "SOCStartMenu",
  altTab: "AltTab3DGridEngine",
  compositor: "Win11FluentGPUCompositor",
  session: "SessionEngine",
  ai: "Win11ProactiveDesktopBrain",
  eventLoop: "OSLiveEventLoop",

  shadowBlacklist: [
    "SOCTaskbar",
    "SOCStartMenuUX",
    "WindowManagerUX",
    "AltTabEngineLegacy",
    "ResponsiveWindowManager"
  ]
};
