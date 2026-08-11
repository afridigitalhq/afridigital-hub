import EventStream from "../../control-room/bridge/EventStream.js";
import ModuleSwitcher from "../../control-room/dashboard/ModuleSwitcher.js";
import ControlRoomRuntime from "../../control-room/runtime/ControlRoomRuntime.js";
import AfriAIDebugTool from "./tools/debug/AfriAIDebugTool.js";
import DecisionEngine from "../../control-room/afrai/DecisionEngine.js";

const AfriAIController = {
  execute(input) {
    const command = input.toLowerCase();

    // AfriDebug intent routing
    const debugIntent = /afridebug|afri debug|debug|diagnos|investigat|runtime issue|error|bug report/.test(command);
    if (debugIntent) {
      return AfriAIDebugTool.execute({
        command: input,
        source: "afriai",
        authority: "ecosystem"
      });
    }

    // AfriAI knowledge decision routing
    const decision = DecisionEngine.decide(input);
    if (
      decision.action === "knowledge_route" ||
      decision.action === "knowledge_rejected"
    ) {
      return decision;
    }

    // runtime control
    if (command.includes("init")) {
      ControlRoomRuntime.init();
      return "runtime_initialized";
    }

    // module switching
    if (command.startsWith("open ")) {
      const module = command.replace("open ", "").trim();
      ModuleSwitcher.set(module);

      EventStream.emit({
        type: "AFRI_AI_ROUTE",
        module
      });

      return `module_opened:${module}`;
    }

    // system status
    if (command.includes("status")) {
      EventStream.emit({
        type: "AFRI_AI_STATUS_REQUEST"
      });

      return "status_requested";
    }

    // fallback
    EventStream.emit({
      type: "AFRI_AI_UNKNOWN_COMMAND",
      input
    });

    return "command_not_recognized";
  }
};

export default AfriAIController;
