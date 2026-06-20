export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
export class EventLog {
  constructor() {
    this.events = [];
  }

  append(event) {
    const e = {
      ...event,
      ts: Date.now()
    };
    this.events.push(e);
    return e;
  }

  getAll() {
    return this.events;
  }

  clear() {
    this.events = [];
  }
}
