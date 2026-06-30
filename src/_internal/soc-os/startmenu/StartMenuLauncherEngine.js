export class StartMenuLauncherEngine {
  constructor() {
    this.open = false;
    this.search = "";
  }

  toggle() {
    this.open = !this.open;
    return this.open;
  }

  query(text) {
    this.search = text;
    return {
      results: ["WarRoom", "Admin Panel", "DAG Viewer"],
      query: text
    };
  }
}
