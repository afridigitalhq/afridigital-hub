let currentMode = "general";

export const AfriAIContext = {
  setMode: (mode) => {
    currentMode = mode;
  },
  getMode: () => currentMode
};
