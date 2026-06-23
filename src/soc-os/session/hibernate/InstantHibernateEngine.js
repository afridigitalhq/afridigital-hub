export class InstantHibernateEngine {
  constructor() {
    this.snapshot = null;
  }

  save(state) {
    this.snapshot = JSON.parse(JSON.stringify(state));
    return "HIBERNATED";
  }

  restore() {
    return this.snapshot || { status: "EMPTY_SESSION" };
  }
}
