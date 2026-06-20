export class TimeTravelReplayEngine {
  constructor() {
    this.timeline = [];
  }

  record(event) {
    this.timeline.push({
      ...event,
      timestamp: Date.now()
    });
  }

  replay(fromTime, toTime) {
    return this.timeline.filter(e =>
      e.timestamp >= fromTime &&
      e.timestamp <= toTime
    );
  }

  simulateFailure(eventType) {
    const slice = this.timeline.filter(e => e.type === eventType);

    return {
      eventType,
      affectedChain: slice.map(e => e.source + "→" + e.target),
      replay: slice
    };
  }
}
