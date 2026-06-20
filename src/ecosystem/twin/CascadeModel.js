export class CascadeModel {
  constructor() {
    this.graph = {};
  }

  simulate(origin) {
    return {
      origin,
      affected: [origin, "AfriAI", "AfriBank", "AfriScan"],
      severity: "SIMULATED"
    };
  }
}
