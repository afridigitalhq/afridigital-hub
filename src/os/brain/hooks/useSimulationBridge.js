import { CascadeSimulationEngine } from "../../predictive/CascadeSimulationEngine";

export function useSimulationBridge() {
  const engine = new CascadeSimulationEngine();

  return {
    simulateFailure: (dag, node) => engine.simulateFailure(dag, node),
    replay: (history) => engine.replay(history),
    inject: (dag, scenario) => engine.injectScenario(dag, scenario)
  };
}
