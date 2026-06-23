export class OSCommandBus {
  constructor() {
    this.listeners = {};
    this.state = {
      mode: "NORMAL",
      panic: false,
      replay: false,
      archive: false,
      scrubber: false
    };
  }

  dispatch(command, payload = {}) {
    if (this.listeners[command]) {
      this.listeners[command].forEach(fn => fn(payload));
    }
  }

  on(command, fn) {
    if (!this.listeners[command]) this.listeners[command] = [];
    this.listeners[command].push(fn);
  }

  setMode(mode) {
    this.state.mode = mode;
    this.dispatch("MODE_CHANGE", { mode });
  }

  toggle(flag) {
    this.state[flag] = !this.state[flag];
    this.dispatch("STATE_CHANGE", { ...this.state });
  }

  getState() {
    return this.state;
  }
}
