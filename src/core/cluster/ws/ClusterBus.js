export class ClusterBus {
  constructor(url) {
    this.ws = new WebSocket(url);
    this.handlers = new Map();

    this.ws.onmessage = (msg) => {
      const event = JSON.parse(msg.data);
      this.emitLocal(event);
    };
  }

  send(event) {
    this.ws.send(JSON.stringify(event));
  }

  on(type, fn) {
    if (!this.handlers.has(type)) this.handlers.set(type, []);
    this.handlers.get(type).push(fn);
  }

  emitLocal(event) {
    const list = this.handlers.get(event.type) || [];
    list.forEach(fn => fn(event));
  }
}
