import { SOCInterruptBrain } from "../interrupt/SOCInterruptBrain";

export function useSOCInterruptBridge(core) {
  const brain = new SOCInterruptBrain(core);

  return {
    classifyInput: (input) => brain.classify(input),
    resolveCommand: (cmd, ctx) => brain.resolve(cmd, ctx)
  };
}
