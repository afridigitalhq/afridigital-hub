export class SOCControlHUDKernel {

  constructor(controlPlane) {
    this.cp = controlPlane;
    this.listeners = [];
  }

  subscribe(fn) {
    this.listeners.push(fn);
  }

  emit() {
    const snapshot = {
      status: this.cp.getStatus(),
      incidents: this.cp.incidents,
      timeline: this.cp.getIncidentTimeline()
    };

    this.listeners.forEach(fn => fn(snapshot));
  }

  triggerFreeze() {
    return this.cp.freezeDeployment();
  }

  triggerUnfreeze() {
    return this.cp.unfreezeDeployment();
  }

  reportIncident(incident) {
    this.cp.recordIncident(incident);
    this.emit();
  }
}
