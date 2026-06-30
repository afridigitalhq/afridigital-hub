export class SOCCommandBus {
  constructor() {
    this.queue = [];
    this.history = [];
  }

  dispatch(command) {
    // 🧠 NEVER AUTO-EXECUTE DANGEROUS ACTIONS
    const safeCommand = {
      ...command,
      status: "PENDING_APPROVAL",
      timestamp: Date.now()
    };

    this.queue.push(safeCommand);
    return safeCommand;
  }

  approve(index) {
    const cmd = this.queue[index];
    if (!cmd) return;

    cmd.status = "APPROVED";
    this.history.push(cmd);
    return cmd;
  }

  reject(index) {
    const cmd = this.queue[index];
    if (!cmd) return;

    cmd.status = "REJECTED";
    this.history.push(cmd);
    return cmd;
  }
}
