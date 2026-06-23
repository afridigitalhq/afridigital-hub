export class CollabSession {
  constructor() {
    this.users = [];
    this.events = [];
  }

  join(user) {
    this.users.push(user);
  }

  emit(event) {
    this.events.push(event);
  }

  getEvents() {
    return this.events;
  }
}
