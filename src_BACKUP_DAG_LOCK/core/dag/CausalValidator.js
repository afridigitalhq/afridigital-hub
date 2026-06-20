export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
// DETERMINISTIC_RENDERER_V2_ACTIVE
export class CausalValidator {
  constructor() {
    this.parents = new Map();
  }

  validate(event) {
    if (!event) return false;

    if (event.from && event.to && event.from === event.to) {
      return false; // self-cycle blocked
    }

    return true;
  }

  enforce(event) {
    if (!this.validate(event)) {
      throw new Error("CAUSAL_VIOLATION: invalid event dependency");
    }
    return true;
  }
}
