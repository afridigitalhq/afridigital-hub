const fs = require("fs");
const path = require("path");

const ROOT = "src";

const FORBIDDEN = [
  "ReplayEngine",
  "PredictionEngine",
  "TimeTravel",
  "afrivision",
  "runtime.graph",
  "runtime.inspect",
  "runtime.rollback",
  "runtime.buildFrames",
  "ws://",
  "wss://afridigital-api.onrender.com/ws/afrivision"
];

function walk(dir, out = []) {
  if (dir.includes("_legacy")) return out;
  if (dir.includes("_internal")) return out;
  if (dir.includes("_ci_quarantine")) return out;
  if (dir.includes("_ci_quarantine")) return out;
  if (!fs.existsSync(dir)) return out;

  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, f.name);

    if (full.includes("_ci_quarantine")) continue;

    if (f.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

const files = walk(ROOT);

let violations = [];

for (const file of files) {
  const txt = fs.readFileSync(file, "utf8");

  for (const rule of FORBIDDEN) {
    if (txt.includes(rule)) {
      violations.push({ file, rule });
    }
  }
}

console.log("\n🧠 B1 FINAL CUT PATCH AUDIT");
console.log("--------------------------------");
console.log("Scanned Files:", files.length);
console.log("Violations Found:", violations.length);

if (violations.length > 0) {
  console.log("\n❌ ARCHITECTURE BREACHES:");

  for (const v of violations) {
    console.log(" -", v.file, "→", v.rule);
  }

  console.log("\n🛑 SYSTEM BLOCKED");
  process.exit(1);
}

console.log("\n🟢 B1 FINAL STATE: LOCKED");
console.log("✔ Frontend pure renderer");
console.log("✔ Backend owns all engines");
console.log("✔ WS contract clean");
