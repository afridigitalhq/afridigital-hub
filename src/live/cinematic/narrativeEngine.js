export function narrativeEngine(event) {
  const type = event?.intent || event?.type;

  if (type === "diagnostic") return "System instability detected. Tracing dependency chain...";
  if (type === "deploy") return "Deployment in progress across distributed services...";
  if (type === "simulation") return "Running infrastructure simulation scenario...";

  return "System stable.";
}
