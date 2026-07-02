import { socCommandClient } from "@/clients/socClient";

const orchestrator = new SOCCommandOrchestrator();

export async function runSOCCommand(command, user) {
  return await orchestrator.run(command, user);
}
