export class Win11MemoryIllusionEngine {

  constructor() {
    this.memory = new Map();
  }

  store(app, state) {
    this.memory.set(app, state);
  }

  restore(app) {
    return this.memory.get(app) || {
      state: "cold_start_illusion"
    };
  }

}
