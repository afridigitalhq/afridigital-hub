export class AIIncidentNarrator {
  explain(incident) {
    return {
      summary: `🧠 Incident detected: ${incident.type}`,
      severity: incident.severity || "low",
      flow: [
        "Signal detected",
        "Propagation mapped",
        "System response simulated",
        "Containment visualized"
      ]
    };
  }
}
