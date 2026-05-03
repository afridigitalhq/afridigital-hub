const express = require("express");

const app = express();
const PORT = process.env.PORT || 10000;

// API ONLY SERVICE
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// crash logs
process.on("uncaughtException", (err) => console.error("🔥 UNCAUGHT:", err));
process.on("unhandledRejection", (err) => console.error("🔥 UNHANDLED:", err));

app.listen(PORT, () => {
  console.log("🚀 Backend API running on Render port:", PORT);
});
