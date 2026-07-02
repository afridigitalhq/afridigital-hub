import { startAfriVisionStream } from "../afrivision/bootstrap/startAfriVisionStream";

class AppBootstrap {
  constructor() {
    this.started = false;
  }

  start() {
    if (this.started) return;

    this.started = true;

    // Register ecosystem modules
    startAfriVisionStream();

    console.log("🟢 AfriDigital App Bootstrap Complete");
  }
}

const appBootstrap = new AppBootstrap();

export default appBootstrap;

