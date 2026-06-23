export class AIIncidentNarratorHUD {
  narrate(event) {
    return {
      title: "System Activity Detected",
      explanation: `Analyzing event: ${event}`,
      severity: Math.random() > 0.7 ? "HIGH" : "NORMAL"
    };
  }
}
