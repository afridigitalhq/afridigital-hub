export class Win11SessionPersistenceEngine {

  save(state) {
    localStorage.setItem("win11_session", JSON.stringify(state));
  }

  restore() {
    return JSON.parse(localStorage.getItem("win11_session") || "{}");
  }

}
