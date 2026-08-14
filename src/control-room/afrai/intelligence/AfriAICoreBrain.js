import DecisionEngine from "./DecisionEngine.js";
import EventStream from "../../../control-room/bridge/EventStream.js";

const AfriAICoreBrain = {
  execute(input) {
    const decision = DecisionEngine.decide(input);

    EventStream.emit({
      type: "AFRAI_DECISION",
      payload: decision
    });

    return decision;
  }
};

export default AfriAICoreBrain;
