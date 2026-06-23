export class SessionManager {
  constructor() {
    this.sessions = {};
    this.active = null;
  }

  createSession(userId) {
    this.sessions[userId] = {
      workspaces: {},
      activeWorkspace: "warroom"
    };

    this.active = userId;
  }

  switchUser(userId) {
    if (this.sessions[userId]) {
      this.active = userId;
    }
  }

  getActiveSession() {
    return this.sessions[this.active];
  }
}
