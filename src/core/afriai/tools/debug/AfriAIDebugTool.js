import AfriDebugCore from "../../../afridebug/AfriDebugCore.js";

const AfriAIDebugTool = {
  name: "AfriDebug",

  description:
    "Analyzes AfriAI errors, runtime issues, knowledge gaps, and generates repair intelligence.",

  execute(input = {}) {
    const mode =
      input.authority === "admin"
        ? "admin"
        : input.authority === "studio"
          ? "studio"
          : "ecosystem";

    return AfriDebugCore.inspect({
      ...input,
      mode,
      trustedAuthority:
        mode === "admin" && input.trustedAuthority === true
    });
  }
};

export default AfriAIDebugTool;
