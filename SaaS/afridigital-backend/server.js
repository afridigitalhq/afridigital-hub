const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

// API
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// SERVE FRONTEND (FIX FOR NOT FOUND ERROR)
const distPath = path.join(__dirname, "../afridigital-frontend/dist");

app.use(express.static(distPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, () => {
  console.log("🚀 Fullstack running on port", PORT);
});
