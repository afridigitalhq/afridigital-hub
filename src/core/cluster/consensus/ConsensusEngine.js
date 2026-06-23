export class ConsensusEngine {
  constructor() {
    this.queue = [];
  }

  receive(event) {
    this.queue.push({
      ...event,
      ts: event.ts || Date.now()
    });

    this.queue.sort((a, b) => a.ts - b.ts);
  }

  flush() {
    const batch = [...this.queue];
    this.queue = [];
    return batch;
  }
}
