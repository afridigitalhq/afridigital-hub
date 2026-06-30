export class SessionEngine {
  constructor() {
    this.user = null;
    this.sessions = new Map();
  }

  login(user) {
    this.user = user;

    if (!this.sessions.has(user.id)) {
      this.sessions.set(user.id, {
        workspace: "warroom",
        history: [],
        preferences: {}
      });
    }

    return this.sessions.get(user.id);
  }

  logout() {
    this.user = null;
  }

  getActiveSession() {
    return this.user ? this.sessions.get(this.user.id) : null;
  }

  switchWorkspace(ws) {
    const session = this.getActiveSession();
    if (session) session.workspace = ws;
  }
}
