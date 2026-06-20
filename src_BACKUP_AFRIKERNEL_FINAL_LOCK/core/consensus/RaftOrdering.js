export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
export class RaftOrdering {
  constructor() {
    this.log = [];
    this.term = 0;
  }

  append(event) {
    this.log.push({ ...event, term: this.term, index: this.log.length });
    return this.log[this.log.length - 1];
  }

  getOrderedLog() {
    return [...this.log].sort((a, b) => a.index - b.index);
  }
}
