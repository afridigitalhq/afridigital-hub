export function bindConversationalOS(orchestrator, loop) {
  return {
    receive(input) {
      return loop.process(input);
    }
  };
}
