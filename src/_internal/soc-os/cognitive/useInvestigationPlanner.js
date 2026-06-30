export function generateInvestigationPlan(incident) {
  return [
    {
      step: "Validate source integrity",
      reason: "Confirm if traffic is legitimate"
    },
    {
      step: "Trace DAG propagation path",
      reason: "Identify cascade origin"
    },
    {
      step: "Check authentication logs",
      reason: "Detect credential anomalies"
    },
    {
      step: "Analyze last 10 system events",
      reason: "Find trigger correlation"
    },
    {
      step: "Run replay simulation",
      reason: "Reconstruct attack timeline"
    }
  ];
}
