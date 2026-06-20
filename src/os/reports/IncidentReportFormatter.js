export function formatIncidentReport(report) {
  return {
    title: "🧠 AI INCIDENT REPORT",
    severity: report.severity,
    summary: report.narrative,
    rootCause: report.rootCause,
    mitigationSteps: report.mitigation,
    routing: report.routing,
    timestamp: Date.now()
  };
}
