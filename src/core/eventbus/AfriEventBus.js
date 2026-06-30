import memory from "../memory/AfriMemory";

class AfriEventBus {
  constructor() {
    this.listeners = {};
    this.history = [];
  }

  emit(event, data) {
    const payload = { event, data, time: Date.now() };

    this.history.push(payload);
    memory.record(payload);

    if (this.history.length > 200) this.history.shift();

    if (this.listeners[event]) {
      this.listeners[event].forEach(fn => fn(payload));
    }

    console.log("📡 EVENT:", event, data);
  }

  on(event, fn) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(fn);
  }

  getHistory() {
    return this.history;
  }
}

const bus = new AfriEventBus();
window.AfriBus = bus;

export default bus;
