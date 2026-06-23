export class SOCInterruptBrain {

  constructor(core) {
    this.core = core;
  }

  classify(input) {
    return {
      type: "ADVISORY",
      priority: "LOW",
      allowed: true,
      message: "input routed to SOC for evaluation only"
    };
  }

  resolve(command, context) {
    return {
      status: "PENDING_ORCHESTRATOR_APPROVAL",
      command,
      context,
      action: "NO_EXECUTION",
      explanation: "all actions are advisory in current mode"
    };
  }
}
