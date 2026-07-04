class TimelineEngine {
  constructor() {
    this.events = [];
    this.pointer = 0;
  }

  push(event) {
    this.events.push({
      ...event,
      frame: this.events.length,
      ts: Date.now()
    });
  }

  getCurrent() {
    return this.events[this.pointer] || null;
  }

  next() {
    if (this.pointer < this.events.length - 1) {
      this.pointer += 1;
    }
    return this.getCurrent();
  }

  reset() {
    this.pointer = 0;
  }
}

export const useSOCTimeline() = new TimelineEngine();
