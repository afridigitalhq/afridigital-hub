export class CommandLayer {
  constructor(workspaceEngine) {
    this.ws = workspaceEngine;
  }

  execute(cmd) {
    switch (cmd) {
      case "open warroom":
        return this.ws.switchWorkspace("warroom");

      case "switch admin":
        return this.ws.switchWorkspace("admin");

      case "switch dag":
        return this.ws.switchWorkspace("dag");

      default:
        return "UNKNOWN_COMMAND";
    }
  }
}
