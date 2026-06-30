export class StartMenuFluent {
  constructor() {
    this.open = false;
  }

  toggle() {
    this.open = !this.open;
    return this.open;
  }

  launch(app) {
    return {
      action: "LAUNCH_APP",
      app
    };
  }
}
