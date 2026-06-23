class EventEngine {
  constructor() {
    this.subscribers = [];
  }

  emit(event) {
    console.log("⚡ EVENT:", event.type || event.intent);

    this.subscribers.forEach(fn => fn(event));
  }

  on(fn) {
    this.subscribers.push(fn);
  }
}

export const eventEngine = new EventEngine();
