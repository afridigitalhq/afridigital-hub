export class AIExplanationEngine {
  constructor() {}

  explain(event, context = {}) {
    const reasons = [];

    if (context.load > 80) {
      reasons.push("System overload increased event propagation speed");
    }

    if (event.type === "MESSAGE" && context.aiLoad > 70) {
      reasons.push("AI subsystem saturation influenced message routing delays");
    }

    if (event.type === "PAYMENT" && context.bankLoad > 75) {
      reasons.push("Financial subsystem congestion caused transaction queue buildup");
    }

    if (reasons.length === 0) {
      reasons.push("Normal system execution path detected");
    }

    return {
      event,
      explanation: reasons,
      summary: reasons.join(" • ")
    };
  }
}
