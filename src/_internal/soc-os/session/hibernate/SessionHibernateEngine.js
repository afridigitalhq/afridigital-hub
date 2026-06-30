export class SessionHibernateEngine {
  constructor() {
    this.snapshot = null;
  }

  hibernate(state) {
    this.snapshot = JSON.parse(JSON.stringify(state));
    return "SESSION_HIBERNATED";
  }

  resume() {
    return {
      status: "RESUMED",
      state: this.snapshot
    };
  }
}
