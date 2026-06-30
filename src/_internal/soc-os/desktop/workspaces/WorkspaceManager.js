export class WorkspaceManager {
  constructor() {
    this.workspaces = {
      warroom: [],
      admin: [],
      incidents: [],
      analytics: []
    };

    this.active = "warroom";
  }

  switch(name) {
    if (this.workspaces[name]) {
      this.active = name;
    }
  }

  addWindow(workspace, window) {
    this.workspaces[workspace].push(window);
  }

  getActiveWorkspace() {
    return this.workspaces[this.active];
  }
}
