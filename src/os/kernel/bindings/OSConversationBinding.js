import { ConversationalOSLoop } from "../../conversation/ConversationalOSLoop";
import { OSOrchestrator } from "../../brain/OSOrchestrator";
import { AINarratorEngine } from "../../narrator/AINarratorEngine";

/**
 * AFRIAI CONVERSATIONAL BINDING LAYER
 * All user/system interaction flows through this pipeline
 */

export function bindConversationalOSKernel({ brain }) {
  const loop = new ConversationalOSLoop({
    orchestrator: OSOrchestrator,
    narrator: AINarratorEngine,
    brain
  });

  loop.setAlias("AfriAi", OSOrchestrator);

  return {
    loop,
    send: (input) => loop.handle(input),
    interrupt: (cmd) => loop.interrupt(cmd),
    stream: (event) => loop.stream(event)
  };
}
