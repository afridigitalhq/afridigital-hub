import { eventEngine } from "../runtime/eventEngine.js";

export function attachWebSocket(io) {
  io.on("connection", (socket) => {
    console.log("🟢 Client connected to AfriAI Live Layer");

    socket.on("afriai-command", (input) => {
      eventEngine.emit({
        type: "manual_input",
        input,
        timestamp: Date.now()
      });
    });

    eventEngine.on((event) => {
      const payload = {
        event,
        simulation: event.simulation || null
      };

      socket.emit("afriai-event", payload);
    });
  });
}
