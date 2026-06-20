export class FinanceFlowEngine {
  constructor() {
    this.flows = [];
  }

  emitFlow(from, to, amount) {
    this.flows.push({
      from,
      to,
      amount,
      intensity: Math.log(amount + 1)
    });
  }

  computeField() {
    return this.flows.map(f => ({
      ...f,
      velocity: f.amount * 0.01,
      glow: Math.min(1, f.intensity / 10)
    }));
  }
}
