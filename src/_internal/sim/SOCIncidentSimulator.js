export class SOCIncidentSimulator {
  constructor() {
    this.scenarios = [];
    this.listeners = [];
  }

  loadScenarios(scenarios = []) {
    this.scenarios = scenarios;
  }

  onEvent(fn) {
    this.listeners.push(fn);
  }

  emit(event) {
    this.listeners.forEach(fn => fn(event));
  }

  startSimulation() {
    let i = 0;

    const interval = setInterval(() => {
      if (i >= this.scenarios.length) {
        clearInterval(interval);
        return;
      }

      const event = {
        id: i,
        type: this.scenarios[i].type,
        severity: this.scenarios[i].severity,
        node: this.scenarios[i].node,
        timestamp: Date.now()
      };

      this.emit(event);
      i++;
    }, 1000);

    return interval;
  }
}
