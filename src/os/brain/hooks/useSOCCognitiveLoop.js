import { SOCCognitiveTickEngine } from "../loop/SOCCognitiveTickEngine";

export function useSOCCognitiveLoop(core) {
  const engine = new SOCCognitiveTickEngine(core);

  return {
    startLoop: (getContext) => engine.start(getContext),
    stopLoop: () => engine.stop()
  };
}
