export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
export class PhysicsFreeze {
  constructor() {
    this.frozen = false;
  }

  freeze() {
    this.frozen = true;
  }

  unfreeze() {
    this.frozen = false;
  }

  isFrozen() {
    return this.frozen;
  }
}
