export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
// TIME_TRAVEL_KERNEL_CONTROLLED
export class TimeTravel {
  constructor() {
    this.snapshots = [];
  }

  save(state) {
    this.snapshots.push({
      ts: Date.now(),
      state: JSON.parse(JSON.stringify(state))
    });
  }

  rollback(time) {
    return this.snapshots
      .filter(s => s.ts <= time)
      .pop()?.state || null;
  }
}
