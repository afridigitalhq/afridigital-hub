class EventBus {
  constructor() {
    this.listeners = {};
  }

  on(event, callback) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(callback);
  }

  emit(event, data) {
    const subs = this.listeners[event];
    if (!subs) return;

    subs.forEach(fn => fn(data));
  }

  off(event, callback) {
    if (!this.listeners[event]) return;
    this.listeners[event] =
      this.listeners[event].filter(fn => fn !== callback);
  }
}

export const eventBus = new EventBus();
