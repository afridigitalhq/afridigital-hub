import { useRef } from "react";
import { SOCCommandExecutor } from "./bridge/commandExecutor";

export function useSOCCommandTerminal(eventBridge) {
  const executor = useRef(new SOCCommandExecutor(eventBridge));

  const runCommand = (input) => {
    return executor.current.execute(input);
  };

  return { runCommand };
}
