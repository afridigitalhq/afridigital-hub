export class Win11SessionHibernateEngine {

  constructor() {
    this.snapshot = null;
  }

  hibernate(state) {
    this.snapshot = JSON.parse(JSON.stringify(state));
    return "SESSION_HIBERNATED";
  }

  restore() {
    return this.snapshot || {};
  }
}
