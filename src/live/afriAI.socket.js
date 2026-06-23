import { io } from "socket.io-client";

export const afriSocket = io("http://localhost:4000", {
  transports: ["websocket"]
});
