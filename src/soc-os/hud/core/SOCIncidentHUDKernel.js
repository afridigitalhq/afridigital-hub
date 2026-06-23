export class SOCIncidentHUDKernel {
  constructor(controlPlane) {
    this.controlPlane = controlPlane;
    this.incidents = [];
    this.replayBuffer = [];
    this.drilldownIndex = new Map();
  }

  ingest(event) {
    const incident = {
      id: Date.now(),
      type: event.type || "ui-event",
      timestamp: Date.now(),
      payload: event,
      severity: event.severity || "low"
    };

    this.incidents.push(incident);
    this.replayBuffer.push(incident);

    return incident;
  }

  getLiveFeed() {
    return this.incidents.slice(-20);
  }

  replay(fromIndex = 0) {
    return this.replayBuffer.slice(fromIndex);
  }

  drilldown(id) {
    return this.incidents.find(i => i.id === id);
  }

  getStatus() {
    return {
      incidentCount: this.incidents.length,
      replaySize: this.replayBuffer.length,
      drilldownNodes: this.drilldownIndex.size
    };
  }
}
