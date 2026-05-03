const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

// =====================
// API ROUTES
// =====================
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "afridigital-backend" });
});

// =====================
// AUTO-RECOVERY FRONTEND LOADER
// =====================
const distPath = path.join(__dirname, "../afridigital-frontend/dist");
const publicPath = path.join(__dirname, "public");

// Ensure fallback public folder exists
if (!fs.existsSync(publicPath)) {
  fs.mkdirSync(publicPath, { recursive: true });
}

// Auto-sync dist → public ON START (NO MANUAL COPY EVER AGAIN)
try {
  if (fs.existsSync(distPath)) {
    fs.cpSync(distPath, publicPath, { recursive: true });
  }
} catch (e) {
  console.error("⚠️ Frontend sync warning:", e.message);
}

// =====================
// STATIC SERVE (SINGLE DOMAIN)
// =====================
app.use(express.static(publicPath));

// SPA fallback
app.get("*", (req, res) => {
  const indexPath = path.join(publicPath, "index.html");

  if (fs.existsSync(indexPath)) {
    return res.sendFile(indexPath);
  }

  return res.status(500).send("Frontend missing: build not found");
});

// =====================
// DEBUG SAFETY LAYER
// =====================
process.on("uncaughtException", (err) => {
  console.error("🔥 UNCAUGHT:", err);
});

process.on("unhandledRejection", (err) => {
  console.error("🔥 UNHANDLED:", err);
});

// =====================
app.listen(PORT, () => {
  console.log("🚀 AfriDigital FULLSTACK LIVE on port:", PORT);
});
