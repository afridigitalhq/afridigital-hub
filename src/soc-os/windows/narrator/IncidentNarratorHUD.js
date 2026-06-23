export class IncidentNarratorHUD {
  explain(incident) {
    return {
      title: `🧠 ${incident.type} detected`,
      severity: incident.severity || "low",

      timeline: [
        "signal acquisition",
        "attack vector mapped",
        "propagation simulation",
        "containment strategy generated",
        "system stabilized (visualized)"
      ],

      insight: "AI is only observing and explaining — no execution actions taken."
    };
  }
}
