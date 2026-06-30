import bus from "../core/eventbus/AfriEventBus";
import memory from "../core/memory/AfriMemory";

class SystemKernel {
  constructor() {
    this.ready = true;
  }

  emit(event, data) {
    bus.emit(event, data);
  }

  on(event, handler) {
    bus.on(event, handler);
  }

  snapshot() {
    return {
      memory: memory.summarize(),
      events: bus.getHistory()
    };
  }
}

const kernel = new SystemKernel();
window.AfriSystem = kernel;

export default kernel;
