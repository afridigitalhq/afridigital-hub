const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

// absolute-safe path (Render-proof)
const publicPath = path.resolve(__dirname, "public");

app.use(express.json());
app.use(express.static(publicPath));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// SPA fallback
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

// crash logs
process.on("uncaughtException", (err) => console.error("🔥 UNCAUGHT:", err));
process.on("unhandledRejection", (err) => console.error("🔥 UNHANDLED:", err));

app.listen(PORT, () => {
  console.log("🚀 Render UI stable mode on port:", PORT);
});
