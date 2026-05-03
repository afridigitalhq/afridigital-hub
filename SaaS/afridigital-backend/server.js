const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

// API
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// ✅ USE BACKEND PUBLIC (NO MORE CROSS-FOLDER DEPENDENCY)
const publicPath = path.join(__dirname, "public");

app.use(express.static(publicPath));

// SPA fallback
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(PORT, () => {
  console.log("🚀 Fullstack stable mode running on port", PORT);
});
