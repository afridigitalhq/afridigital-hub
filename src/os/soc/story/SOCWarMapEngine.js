export class SOCWarMapEngine {
  constructor({ dag, voice }) {
    this.dag = dag;
    this.voice = voice;
    this.incidents = [];
  }

  // 🌍 Convert DAG event → spatial incident node
  mapEvent(event) {
    return {
      id: event.id || Date.now(),
      region: event.module || "global",
      severity: event.severity || "info",
      timestamp: Date.now(),
      impact: this._estimateImpact(event)
    };
  }

  // 🔥 simulate blast radius
  _estimateImpact(event) {
    if (event.severity === "critical") return "HIGH";
    if (event.severity === "warning") return "MEDIUM";
    return "LOW";
  }

  // 🎬 replay incident timeline
  replay(incidentId) {
    const incident = this.incidents.find(i => i.id === incidentId);

    if (!incident) return;

    this.voice?.speak({
      type: "REPLAY_START",
      summary: `Replaying incident in region ${incident.region}`
    }, "warning");

    return incident;
  }

  // 🌍 ingest DAG → war map
  ingest(event) {
    const mapped = this.mapEvent(event);
    this.incidents.push(mapped);

    this.voice?.speak({
      type: "WAR_EVENT",
      summary: `${mapped.region} affected with ${mapped.severity} severity`
    }, mapped.severity === "HIGH" ? "critical" : "info");

    return mapped;
  }
}
