export function routeDAGEventToDashboard(event, registry) {
  const map = {
    "SECURITY_ALERT": "soc",
    "FOOTBALL_EVENT": "football",
    "AFRISCAN_EVENT": "afriscan",
    "AI_EVENT": "afriai"
  };

  const target = map[event.type];
  if (target) registry.activate(target);
}
