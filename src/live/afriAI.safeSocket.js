import { io } from "socket.io-client";
import { WS_URL } from "../config/api";

export const afriSocket = io(WS_URL, {
  transports: ["websocket"],
  reconnection: true,
  reconnectionAttempts: 10,
  reconnectionDelay: 1000,
  timeout: 20000
});
