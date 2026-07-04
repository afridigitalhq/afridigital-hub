class AppBootstrap {
  constructor() {
    this.started = false;
  }

  start() {
    if (this.started) return;
    this.started = true;
    console.log("🟢 AfriDigital App Bootstrap Complete");
  }
}

const appBootstrap = new AppBootstrap();

export default appBootstrap;
