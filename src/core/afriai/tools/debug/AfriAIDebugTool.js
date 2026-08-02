import AfriAIDebugBridge from "../../debug/bridge/AfriAIDebugBridge.js";

const AfriAIDebugTool = {

  name: "AfriDebug",

  description:
    "Analyzes AfriAI errors, runtime issues, knowledge gaps, and generates repair intelligence.",

  execute(input = {}){

    return AfriAIDebugBridge.analyze(input);

  }

};

export default AfriAIDebugTool;
