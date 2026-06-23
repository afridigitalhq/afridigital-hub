import { ConversationalOSLoop } from "../../conversation/ConversationalOSLoop";

export function useSOCConversation(spine, voice, interrupt) {
  const loop = new ConversationalOSLoop(spine, voice, interrupt);

  return {
    loop,
    send: (input) => loop.process(input)
  };
}
