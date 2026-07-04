import { afriSocket } from "./afriAI.socket";

export function useAfriAICommand() {
  const sendCommand = (input) => {
    afriSocket.emit("afriai-command", input);
  };

  return { sendCommand };
}
