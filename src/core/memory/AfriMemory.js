class AfriMemory {
  constructor() {
    this.store = {
      events: [],
      patterns: {},
      summaries: []
    };
  }

  record(event) {
    this.store.events.push(event);

    if (this.store.events.length > 500) {
      this.store.events.shift();
    }

    this._updatePatterns(event);
  }

  _updatePatterns(event) {
    const key = event.event;

    if (!this.store.patterns[key]) {
      this.store.patterns[key] = 0;
    }

    this.store.patterns[key] += 1;
  }

  summarize() {
    return {
      totalEvents: this.store.events.length,
      topEvents: Object.entries(this.store.patterns)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
    };
  }
}

const memory = new AfriMemory();
window.AfriMemory = memory;

export default memory;
