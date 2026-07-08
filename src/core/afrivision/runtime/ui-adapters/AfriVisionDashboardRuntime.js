/**
 * AfriVision Dashboard Runtime Core
 * ----------------------------------
 * Handles lifecycle, frame loop, module registry, and event dispatch.
 */

export class AfriVisionDashboardRuntime {
  constructor() {
    this.modules = new Map();
    this.listeners = new Map();
    this.running = false;
    this.frame = 0;
    this.interval = null;
  }

  registerModule(name, module) {
    this.modules.set(name, module);
    this.emit("module:registered", { name });
  }

  getModule(name) {
    return this.modules.get(name);
  }

  on(event, callback) {
    if (!this.listeners.has(event)) this.listeners.set(event, []);
    this.listeners.get(event).push(callback);
  }

  emit(event, payload) {
    const subs = this.listeners.get(event) || [];
    subs.forEach(fn => fn(payload));
  }

  start(tickRate = 1000 / 30) {
    if (this.running) return;

    this.running = true;
    this.emit("runtime:start", { tickRate });

    this.interval = setInterval(() => {
      this.frame++;

      this.emit("frame", {
        frame: this.frame,
        timestamp: Date.now()
      });

      // tick modules
      for (const [name, module] of this.modules.entries()) {
        if (typeof module?.tick === "function") {
          module.tick({
            frame: this.frame
          });
        }
      }
    }, tickRate);
  }

  stop() {
    if (!this.running) return;

    clearInterval(this.interval);
    this.running = false;

    this.emit("runtime:stop", { frame: this.frame });
  }

  reset() {
    this.stop();
    this.frame = 0;
    this.emit("runtime:reset");
  }
}

export default AfriVisionDashboardRuntime;
