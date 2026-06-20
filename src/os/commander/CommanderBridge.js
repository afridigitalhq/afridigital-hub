export function bindIncidentCommander(commander, os) {

  return function handleEvent(event) {

    const report = commander.analyze(event);

    os.routeEvent({
      type: "INCIDENT_REPORT",
      payload: report
    });

    return report;
  };
}
