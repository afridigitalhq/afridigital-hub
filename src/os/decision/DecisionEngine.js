export class DecisionEngine {
  constructor(commander) {
    this.commander = commander;
  }

  decide(event) {
    const report = this.commander.analyze(event);

    return {
      action: report.routing,
      confidence: Math.min(report.severity / 10, 1),
      explanation: report.narrative
    };
  }
}
