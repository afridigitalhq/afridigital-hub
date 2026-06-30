export const SOCRootKernel = {
  boot: true,

  desktop: {
    mode: "windows11",
    activeWorkspace: "warroom"
  },

  workspaces: [
    "warroom",
    "admin",
    "dag",
    "security",
    "replay"
  ],

  features: {
    taskbar: true,
    startMenu: true,
    altTab: true,
    snapAssist: true,
    fluentUI: true,
    audioGraph: true,
    assistantHUD: true
  }
};
