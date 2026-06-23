import { CascadeForecastEngine } from "../../predictive/CascadeForecastEngine";

export function useForecastBridge() {
  const engine = new CascadeForecastEngine();

  return {
    predict: (event, dag) => engine.predict(event, dag)
  };
}
