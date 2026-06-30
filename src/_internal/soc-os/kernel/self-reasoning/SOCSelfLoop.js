import { SOCReasoningEngine } from "./SOCReasoningEngine";

export class SOCSelfLoop {

  constructor(registry) {
    this.engine = new SOCReasoningEngine(registry);
    this.registry = registry;
  }

  tick(systemMap) {
    const issues = this.engine.scan(systemMap);

    return {
      status: issues.length === 0 ? "HEALTHY" : "DEVIATIONS_DETECTED",
      issues,
      suggestions: this.engine.suggestFixes()
    };
  }
}
