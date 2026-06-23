export class WorkspaceEngine {
  constructor() {
    this.workspaces = {
      warroom: [],
      admin: [],
      dag: [],
      security: []
    };
    this.active = "warroom";
  }

  switchWorkspace(name) {
    if (this.workspaces[name]) this.active = name;
    return this.active;
  }

  getActive() {
    return this.workspaces[this.active];
  }
}
