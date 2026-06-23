export class SOCStoryNarrator {
  constructor(voice) {
    this.voice = voice;
  }

  narrateIncident(incident) {
    const story = `
Incident detected in ${incident.region}.
Severity classified as ${incident.severity}.
System propagation is now being analyzed.
Estimated impact level: ${incident.impact}.
    `;

    this.voice?.speak({
      type: "INCIDENT_STORY",
      summary: story
    }, incident.severity === "critical" ? "critical" : "info");
  }

  explainRootCause(event) {
    this.voice?.speak({
      type: "ROOT_CAUSE",
      summary: `Root cause traced to ${event?.source || "unknown subsystem"}`
    }, "warning");
  }
}
