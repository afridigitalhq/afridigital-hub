export class CollabWarRoomEngine {
  constructor() {
    this.users = [];
    this.state = {
      dag: {},
      incidents: [],
      timeline: []
    };
  }

  join(user) {
    this.users.push(user);
  }

  broadcast(update) {
    this.state = { ...this.state, ...update };
  }
}
