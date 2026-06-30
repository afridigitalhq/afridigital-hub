export function explainIncident(incident, context = {}) {
  if (!incident) return null;

  return {
    summary: `Incident detected in ${incident.type}`,
    
    possibleCauses: [
      "Traffic anomaly spike",
      "External probe pattern",
      "Service degradation cascade",
      "Credential misuse pattern"
    ],

    propagationPath: [
      "Ingress layer",
      "API gateway",
      "Service cluster",
      "Database stress layer"
    ],

    riskLevel: incident.severity > 7 ? "HIGH" : "MEDIUM",

    recommendedActions: [
      "Inspect upstream traffic source",
      "Check auth anomalies",
      "Trace DAG propagation path",
      "Review last 5 system events"
    ]
  };
}
