export class TaskbarGlowEngine {
  constructor() {
    this.active = null;
  }

  setActive(app) {
    this.active = app;
    return {
      glow: true,
      app
    };
  }
}
