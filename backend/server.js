import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🔒 LOAD DEPLOY LOCK CONFIG (SOURCE OF TRUTH)
const config = JSON.parse(
  fs.readFileSync(new URL("./.frontend-path.json", import.meta.url))
);

const frontendPath = path.resolve(__dirname, config.frontend);

// Serve static UI
app.use(express.static(frontendPath));

// SPA fallback (Render-safe routing)
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Health check
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    service: "AfriDigitalHub",
    frontend: config.frontend
  });
});

app.listen(PORT, () => {
  console.log("🚀 AfriDigitalHub DEPLOY LOCK ACTIVE on port", PORT);
});
