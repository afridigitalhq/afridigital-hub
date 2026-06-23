export class OSFeelEngine {
  constructor() {
    this.notifications = [];
    this.dim = false;
    this.previews = new Map();
  }

  notify(msg) {
    this.notifications.push({
      id: Date.now(),
      msg
    });
  }

  setDim(state) {
    this.dim = state;
  }

  setPreview(task, data) {
    this.previews.set(task, data);
  }
}
