const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// API ONLY LAYER
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "afridigital-api" });
});

app.get("/api/wallet", (req, res) => {
  res.json({ balance: 100 });
});

app.listen(PORT, () => {
  console.log("🚀 API running on port", PORT);
});
