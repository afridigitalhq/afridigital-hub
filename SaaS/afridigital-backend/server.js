const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 10000;

// API health
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// absolute-safe public path (Render-proof)
const publicPath = path.resolve(__dirname, "public");

// safety check (prevents silent crash)
if (!fs.existsSync(publicPath)) {
  console.error("❌ PUBLIC FOLDER MISSING:", publicPath);
}

// static frontend
app.use(express.static(publicPath));

// SPA fallback (safe guard)
app.get("*", (req, res) => {
  const indexPath = path.join(publicPath, "index.html");
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(500).send("Frontend not built: index.html missing");
  }
});

// crash visibility (Render debugging)
process.on("uncaughtException", (err) => console.error("🔥 UNCAUGHT:", err));
process.on("unhandledRejection", (err) => console.error("🔥 UNHANDLED:", err));

app.listen(PORT, () => {
  console.log("🚀 Render stable server running on", PORT);
});
