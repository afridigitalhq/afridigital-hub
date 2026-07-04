import { eventBus } from "../bus/event.bus";
import { controlCenter } from "../control/control.center";

export function emitHeroToggle() {
  controlCenter.toggleHero();
  eventBus.emit("hero:update", controlCenter.getState().hero);
}

export function emitPanelToggle(name) {
  controlCenter.togglePanel(name);
  eventBus.emit("panel:update", {
    name,
    state: controlCenter.getState().panels[name]
  });
}

export function emitSystemPulse(payload) {
  eventBus.emit("system:pulse", payload);
}
