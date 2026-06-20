export function bindPredictionToWarMap(forecastEngine, warMap) {

  return function runForecast(events) {

    const predictions = events.map(e =>
      forecastEngine.simulate(e, 3)
    );

    const global = forecastEngine.forecastGlobalRisk(events);

    if (warMap?.updatePrediction) {
      warMap.updatePrediction({
        predictions,
        global
      });
    }

    return {
      predictions,
      global
    };
  };
}
