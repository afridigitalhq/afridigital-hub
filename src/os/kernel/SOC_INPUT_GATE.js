export function SOCInputGate(loop) {
  return {
    send(input) {
      return loop.process(input);
    }
  };
}
