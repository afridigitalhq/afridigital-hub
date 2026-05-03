const path = require("path");
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

// absolute-safe path (Render-proof)

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// SPA fallback
app.get("*", (req, res) => {
});

// crash logs
process.on("uncaughtException", (err) => console.error("🔥 UNCAUGHT:", err));
process.on("unhandledRejection", (err) => console.error("🔥 UNHANDLED:", err));

app.listen(PORT, () => {
  console.log("🚀 Render UI stable mode on port:", PORT);
});

app.use(express.static(path.join(__dirname,"public")));

app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname,"public","index.html"));
});

