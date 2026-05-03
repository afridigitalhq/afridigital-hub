const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

// =====================
// API
// =====================
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "afridigital-backend" });
});

// =====================
// RENDER-SAFE FRONTEND PATH RESOLUTION
// =====================
const frontendDist = path.join(__dirname, "../afridigital-frontend/dist");

// HARD GUARANTEE CHECK
if (!fs.existsSync(frontendDist)) {
  console.error("❌ FRONTEND DIST NOT FOUND. BUILD FAILED OR MISCONFIGURED.");
}

// =====================
// STATIC SERVE (NO COPYING, NO PUBLIC FOLDER)
// =====================
app.use(express.static(frontendDist));

// SPA FALLBACK
app.get("*", (req, res) => {
  const indexFile = path.join(frontendDist, "index.html");

  if (fs.existsSync(indexFile)) {
    return res.sendFile(indexFile);
  }

  return res.status(500).send("Frontend not built on Render");
});

// =====================
// DEBUG SAFETY
// =====================
process.on("uncaughtException", (err) => {
  console.error("🔥 UNCAUGHT:", err);
});

process.on("unhandledRejection", (err) => {
  console.error("🔥 UNHANDLED:", err);
});

// =====================
app.listen(PORT, () => {
  console.log("🚀 AfriDigitalHub running on Render port:", PORT);
});
