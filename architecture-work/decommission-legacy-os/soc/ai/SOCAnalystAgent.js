export function analyzeSOC(event, context = {}) {
  if (!event) return "All systems stable. No anomalies detected.";

  switch (event.type) {

    case "ATTACK":
      return "SOC ALERT: Coordinated intrusion pattern detected. Multiple nodes showing lateral movement.";

    case "FINANCIAL_ANOMALY":
      return "SOC ANALYST: Financial subsystem deviation detected. Liquidity stress propagating through AfriBank layer.";

    case "SECURITY_BREACH":
      return "CRITICAL: Security boundary violation observed. Initiating trace across dependency graph.";

    case "SYSTEM_STRESS":
      return "WARNING: Cross-system load imbalance increasing. Risk of cascade failure rising.";

    default:
      return "Monitoring active. No critical anomalies detected in current SOC scope.";
  }
}
