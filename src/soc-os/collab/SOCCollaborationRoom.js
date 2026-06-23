export class SOCCollaborationRoom {
  constructor(roomId) {
    this.roomId = roomId;
    this.users = [];
    this.sharedIncidents = [];
    this.actions = [];
  }

  join(user) {
    this.users.push(user);
  }

  broadcastIncident(incident) {
    this.sharedIncidents.push(incident);
  }

  proposeAction(action) {
    this.actions.push({
      ...action,
      status: "PROPOSED"
    });
  }
}
