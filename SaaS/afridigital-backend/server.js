const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// APIs
app.use(express.json());
app.get("/api/health", (req, res) => res.json({ status: "ok" }));

// ZERO-COPY STATIC SERVE (DIRECT FROM FRONTEND BUILD)
const frontendDist = path.join(__dirname, "../afridigital-frontend/dist");

app.use(express.static(frontendDist));

app.get("*", (req, res) => {
  res.sendFile(path.join(frontendDist, "index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Render server running on port ${PORT}`);
});
