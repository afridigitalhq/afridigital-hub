const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

// health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// static frontend (Render-safe)
const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

// SPA fallback
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

// hard crash visibility
process.on("uncaughtException", (err) => {
  console.error("🔥 UNCAUGHT:", err);
});

process.on("unhandledRejection", (err) => {
  console.error("🔥 UNHANDLED:", err);
});

app.listen(PORT, () => {
  console.log("🚀 Server running on port", PORT);
});
