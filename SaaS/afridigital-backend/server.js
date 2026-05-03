const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 10000;

// base directory safety (Render-safe)
const publicPath = path.resolve(__dirname, "public");

app.use(express.json());

// health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", runtime: "render" });
});

// static frontend
app.use(express.static(publicPath));

// SPA fallback (safe + guarded)
app.get("*", (req, res) => {
  const indexPath = path.join(publicPath, "index.html");

  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(500).send("Frontend missing: build not found in /public");
  }
});

// crash logs (Render debugging)
process.on("uncaughtException", (err) => {
  console.error("🔥 UNCAUGHT:", err);
});

process.on("unhandledRejection", (err) => {
  console.error("🔥 UNHANDLED:", err);
});

app.listen(PORT, () => {
  console.log("🚀 AfriDigitalHub live on Render port:", PORT);
});
