export class Win11MultiMonitorCompositor {

  constructor() {
    this.monitors = [];
  }

  register(display) {
    this.monitors.push(display);
  }

  route(window, monitorId) {
    return {
      ...window,
      monitor: monitorId
    };
  }
}
