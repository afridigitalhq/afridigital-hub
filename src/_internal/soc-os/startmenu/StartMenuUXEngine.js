export class StartMenuUXEngine {

  constructor() {
    this.apps = [
      "WarRoom",
      "Admin Dashboard",
      "DAG Viewer",
      "Incident Replay"
    ];
  }

  search(query) {
    return this.apps.filter(a =>
      a.toLowerCase().includes(query.toLowerCase())
    );
  }
}
