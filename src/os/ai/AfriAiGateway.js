import { SOCEventSpine } from "../spine/SOCEventSpine";

export function AfriAi(input) {
  return SOCEventSpine.publish({
    type: "USER_INPUT",
    payload: input,
    source: "AfriAi"
  });
}
