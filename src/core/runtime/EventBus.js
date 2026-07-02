/**
 * ============================================================
 * AfriDigital Runtime EventBus
 * Browser-native publish / subscribe system
 * Shared by all AfriDigital ecosystem modules.
 * ============================================================
 */

class EventBus {
  constructor() {
    this.events = new Map();
  }

  on(eventName, listener) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, new Set());
    }

    this.events.get(eventName).add(listener);

    return () => this.off(eventName, listener);
  }

  off(eventName, listener) {
    const listeners = this.events.get(eventName);

    if (!listeners) return;

    listeners.delete(listener);

    if (listeners.size === 0) {
      this.events.delete(eventName);
    }
  }

  emit(eventName, payload) {
    const listeners = this.events.get(eventName);

    if (!listeners) return;

    listeners.forEach((listener) => {
      try {
        listener(payload);
      } catch (error) {
        console.error(
          `[AfriDigital EventBus] "${eventName}" listener failed:`,
          error
        );
      }
    });
  }

  clear(eventName) {
    if (eventName) {
      this.events.delete(eventName);
      return;
    }

    this.events.clear();
  }

  listenerCount(eventName) {
    return this.events.get(eventName)?.size || 0;
  }

  eventNames() {
    return [...this.events.keys()];
  }
}

const eventBus = new EventBus();

export default eventBus;
