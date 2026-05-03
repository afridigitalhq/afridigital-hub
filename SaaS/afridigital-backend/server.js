const express = require("express");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

// HEALTH CHECK
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "afridigital-backend" });
});

// CRASH VISIBILITY
process.on("uncaughtException", (err) => console.error("🔥 UNCAUGHT:", err));
process.on("unhandledRejection", (err) => console.error("🔥 UNHANDLED:", err));

app.listen(PORT, () => {
  console.log("🚀 AfriDigital API running on Render port:", PORT);
});
