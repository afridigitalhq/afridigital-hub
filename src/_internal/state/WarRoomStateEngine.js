export class WarRoomStateEngine {
  constructor() {
    this.state = {
      mode: "LIVE",
      incidents: [],
      forecast: {},
      dag: {},
      replay: [],
      panic: false,
      scrub: 0
    };

    this.subscribers = [];
  }

  dispatch(event) {
    switch (event.type) {

      case "INCIDENT":
        this.state.incidents.push(event.payload);
        break;

      case "FORECAST":
        this.state.forecast = event.payload;
        break;

      case "DAG_UPDATE":
        this.state.dag = event.payload;
        break;

      case "REPLAY_PUSH":
        this.state.replay.push(event.payload);
        break;

      case "PANIC_MODE":
        this.state.panic = event.payload.active;
        break;

      case "SCRUB":
        this.state.scrub = event.payload.index;
        break;

      default:
        break;
    }

    this.notify();
  }

  getState() {
    return this.state;
  }

  subscribe(fn) {
    this.subscribers.push(fn);
    fn(this.state);
    return () => {
      this.subscribers = this.subscribers.filter(s => s !== fn);
    };
  }

  notify() {
    this.subscribers.forEach(fn => fn(this.state));
  }
}
