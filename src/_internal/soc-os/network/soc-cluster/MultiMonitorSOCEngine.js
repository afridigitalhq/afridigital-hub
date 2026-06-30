export class MultiMonitorSOCEngine {
  constructor() {
    this.monitors = ["MAIN", "AUX", "WARROOM"];
  }

  route(window, monitor) {
    return {
      ...window,
      assignedTo: monitor || "MAIN"
    };
  }

  layout() {
    return this.monitors.map(m => ({
      monitor: m,
      active: true
    }));
  }
}
