import { landingRegistry } from "../../registry/landing.registry";

class ControlCenter {
  constructor() {
    this.state = {
      hero: landingRegistry.hero.enabled,
      panels: { ...landingRegistry.panels }
    };
  }

  toggleHero(value) {
    this.state.hero = value ?? !this.state.hero;
    landingRegistry.hero.enabled = this.state.hero;
  }

  togglePanel(name, value) {
    if (!this.state.panels[name]) return;
    this.state.panels[name].enabled =
      value ?? !this.state.panels[name].enabled;

    landingRegistry.panels[name].enabled =
      this.state.panels[name].enabled;
  }

  getState() {
    return this.state;
  }
}

export const controlCenter = new ControlCenter();
