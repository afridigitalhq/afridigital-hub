export class SessionRestoreEngine {

  constructor() {
    this.windows = [];
  }

  save(windows) {
    this.windows = windows;
    localStorage.setItem("soc-session", JSON.stringify(windows));
  }

  restore() {
    const data = localStorage.getItem("soc-session");
    return data ? JSON.parse(data) : [];
  }
}
