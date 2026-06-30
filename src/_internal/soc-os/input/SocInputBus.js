export class SocInputBus {
  constructor() {
    this.listeners = [];
  }

  subscribe(fn) {
    this.listeners.push(fn);
    return () => {
      this.listeners = this.listeners.filter(l => l !== fn);
    };
  }

  dispatch(event) {
    for (let l of this.listeners) {
      l(event);
    }
  }
}
