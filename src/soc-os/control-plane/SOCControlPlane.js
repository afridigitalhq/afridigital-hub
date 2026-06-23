export class SOCControlPlane {

  constructor() {
    this.frozen = false;
    this.incidents = [];
    this.timeline = [];
  }

  freezeDeployment() {
    this.frozen = true;
    return "DEPLOYMENT FROZEN (READ-ONLY MODE)";
  }

  unfreezeDeployment() {
    this.frozen = false;
    return "DEPLOYMENT UNFROZEN";
  }

  recordIncident(incident) {
    this.incidents.push({
      ...incident,
      timestamp: Date.now()
    });
  }

  getIncidentTimeline() {
    return this.timeline;
  }

  getStatus() {
    return {
      frozen: this.frozen,
      incidentCount: this.incidents.length,
      timelineLength: this.timeline.length
    };
  }
}
