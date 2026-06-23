export function useAfriAI(socket) {
  function sendCommand(input) {
    socket.emit("afriai-command", input);
  }

  return { sendCommand };
}
