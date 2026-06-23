export class SOCEventMesh {
  constructor() {
    this.subscribers = new Map();
  }

  publish(event) {
    for (const [, callback] of this.subscribers) {
      callback(event);
    }
  }

  subscribe(nodeId, callback) {
    this.subscribers.set(nodeId, callback);
  }

  unsubscribe(nodeId) {
    this.subscribers.delete(nodeId);
  }
}
