import { SOCCommandOrchestrator } from "../../afridigital-api/core/security/socCommandOrchestrator";

const orchestrator = new SOCCommandOrchestrator();

export async function runSOCCommand(command, user) {
  return await orchestrator.run(command, user);
}
