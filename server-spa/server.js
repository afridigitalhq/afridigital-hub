import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, "..", "dist");

app.use(express.static(distPath));

// SPA fallback (CRITICAL)
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// Render dynamic port support
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("🟢 AfriDigital SPA Web Service running on", PORT);
});
