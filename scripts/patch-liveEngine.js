import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILE_PATH = path.join(__dirname, "..", "src", "core", "live", "liveEngine.js");

const MARKER = "AFRIVISION_CINEMATIC_L20";

function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch (err) {
    return "";
  }
}

function writeFileSafe(filePath, data) {
  fs.writeFileSync(filePath, data, "utf8");
}

function alreadyPatched(content) {
  return content.includes(MARKER);
}

function buildAfriVisionLayer() {
  return `

// ===== ${MARKER} =====
export function startAfriVisionCinematicStream(engine) {
  let frame = 0;

  setInterval(() => {
    frame++;

    const motion = Math.random() > 0.6;
    const intensity = Math.floor(Math.random() * 100);

    engine.emit("vision", {
      feed: "CINEMATIC_CCTV_STREAM",
      frame,
      motion,
      intensity,
      timestamp: Date.now(),
      signal: motion ? "ACTIVE" : "IDLE",
      layer: "AfriVision"
    });

  }, 1200);
}
`;
}

function patchEngine() {
  let file = readFileSafe(FILE_PATH);

  if (!file) {
    console.log("❌ liveEngine.js not found — creating fresh file");
    file = "";
  }

  if (alreadyPatched(file)) {
    console.log("🟡 AfriVision layer already applied — skipping patch");
    return;
  }

  if (!file.endsWith("\n")) file += "\n";

  file += buildAfriVisionLayer();

  writeFileSafe(FILE_PATH, file);

  console.log("🟢 AfriVision Cinematic Layer injected successfully");
  console.log("📡 Layer: L20 CINEMATIC STREAM ACTIVE");
}

patchEngine();
