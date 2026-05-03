const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

// ===================== API ROUTES =====================
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "afridigital-single-domain" });
});

// ===================== PAYSTACK READY HOOK =====================
app.post("/paystack/webhook", (req, res) => {
  console.log("Paystack event received:", req.body);
  res.sendStatus(200);
});

// ===================== STATIC FRONTEND =====================
const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

// ===================== SPA ROUTE =====================
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

// ===================== ERROR SAFETY =====================
process.on("uncaughtException", (err) => console.error("🔥 UNCAUGHT:", err));
process.on("unhandledRejection", (err) => console.error("🔥 UNHANDLED:", err));

// ===================== START SERVER =====================
app.listen(PORT, () => {
  console.log("🚀 SINGLE DOMAIN MODE ACTIVE ON PORT:", PORT);
});
