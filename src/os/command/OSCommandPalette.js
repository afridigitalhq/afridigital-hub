export class OSCommandPalette {
  constructor(os) {
    this.os = os;
    this.history = [];
  }

  // ⚡ main command entry
  execute(input) {
    if (!input) return;

    const cmd = input.toLowerCase().trim();
    this.history.push(cmd);

    // 🧭 dashboard switching
    if (cmd.startsWith("open ")) {
      const target = cmd.replace("open ", "");
      this.os.activate(target);
      return { action: "SWITCH_DASHBOARD", target };
    }

    // 🧠 system inspection
    if (cmd === "status") {
      return this.os.snapshot();
    }

    // ⚡ dag simulation trigger
    if (cmd.startsWith("simulate ")) {
      return {
        action: "DAG_SIMULATION",
        mode: cmd.replace("simulate ", "")
      };
    }

    // 🧩 list dashboards
    if (cmd === "list") {
      return this.os.snapshot().dashboards;
    }

    // 🔴 emergency mode
    if (cmd === "emergency") {
      this.os.activate("soc");
      return { action: "EMERGENCY_MODE" };
    }

    return {
      action: "UNKNOWN_COMMAND",
      input: cmd
    };
  }
}
