import { controlCenter } from "../control/control.center";

export function useControlCenter() {
  return {
    getState: () => controlCenter.getState(),
    toggleHero: (v) => controlCenter.toggleHero(v),
    togglePanel: (n, v) => controlCenter.togglePanel(n, v)
  };
}
