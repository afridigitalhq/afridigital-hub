/**
 * AFRIDIGITAL EVENT BUS (REAL-TIME SYSTEM NERVOUS SYSTEM)
 * Core communication layer between all modules
 */

class AfriEventBus {
  constructor() {
    this.events = {};
  }

  /**
   * Subscribe to event
   */
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  /**
   * Emit event globally
   */
  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach((callback) => {
        try {
          callback(data);
        } catch (err) {
          console.error("EventBus error:", err);
        }
      });
    }
  }

  /**
   * Remove event listener
   */
  off(event, callback) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(cb => cb !== callback);
  }

  /**
   * Clear all events
   */
  clear() {
    this.events = {};
  }
}

// 🔥 GLOBAL SINGLETON (SYSTEM-WIDE BUS)
const eventBus = new AfriEventBus();

export default eventBus;
