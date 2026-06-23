export class Win11IncidentNarratorHUD {

  explain(event) {
    return {
      title: "System Activity",
      message: `Window ${event.type} detected`,
      severity: event.severity || "low",
      recommendation: "No action required"
    };
  }
}
