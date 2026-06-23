import { SOCCognitiveCore } from "../core/SOCCognitiveCore";

export function useSOCCoreBridge() {
  const core = new SOCCognitiveCore();

  return {
    evaluate: (payload) => core.analyze(payload)
  };
}
