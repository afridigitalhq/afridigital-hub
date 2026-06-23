import { OSState } from "../state/osState";

export class SOCCommandExecutor {
  constructor(eventBridge) {
    this.bus = eventBridge;
  }

  execute(input) {
    const cmd = input.trim();

    // 🧠 SAFE COMMAND MAPPING (NO SYSTEM MUTATION)

    if (cmd === "status") {
      return this.emit("STATUS", { ok: true });
    }

    if (cmd === "panic on") {
      OSState.panic = true;
      return this.emit("PANIC_MODE", { state: true });
    }

    if (cmd === "panic off") {
      OSState.panic = false;
      return this.emit("STABILIZE", { state: false });
    }

    if (cmd.includes("replay")) {
      return this.emit("REPLAY_REQUEST", { cmd });
    }

    if (cmd.includes("dag")) {
      return this.emit("DAG_INSPECT", { cmd });
    }

    if (cmd.includes("forecast")) {
      return this.emit("FORECAST_QUERY", { cmd });
    }

    // default fallback
    return this.emit("COMMAND_LOG", { cmd });
  }

  emit(type, payload) {
    this.bus.route({
      type,
      payload,
      time: Date.now()
    });
  }
}
