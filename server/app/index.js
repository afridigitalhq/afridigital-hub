import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

import { resolveIntent } from "../afriAI/intentResolver.js";
import { eventEngine } from "../runtime/eventEngine.js";
import { mapEventToSimulation } from "../runtime/simulationMapper.js";
import { attachWebSocket } from "../realtime/ws.server.js";

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST"]
}));

app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

attachWebSocket(io);

// 🧠 AfriAI Command Endpoint
app.post("/api/afriai/command", (req, res) => {
  const input = req.body.input;

  const intent = resolveIntent(input);

  const event = {
    ...intent,
    type: intent.intent,
    simulation: mapEventToSimulation(intent),
    timestamp: Date.now()
  };

  eventEngine.emit(event);

  res.json({
    success: true,
    event
  });
});

// ❤️ Health Check (Render-safe)
app.get("/health", (_, res) => {
  res.status(200).json({
    status: "AFRIAI_RUNTIME_ACTIVE",
    uptime: process.uptime()
  });
});

// 🚀 CRITICAL FIX: Render PORT SUPPORT
const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`🧠 AfriAI Runtime running on port ${PORT}`);
});
