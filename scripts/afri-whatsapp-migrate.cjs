const fs = require("fs");
const path = require("path");

const ROOT = "src";

function walk(dir, files = []) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) walk(full, files);
    else if (full.endsWith(".js") || full.endsWith(".jsx")) files.push(full);
  }
  return files;
}

let changed = 0;

walk(ROOT).forEach(file => {
  let code = fs.readFileSync(file, "utf8");

  if (
    code.includes("wa.me") ||
    code.includes("whatsapp://") ||
    (code.includes("window.location") && code.includes("whatsapp"))
  ) {
    const original = code;

    code = code.replace(/https?:\/\/wa\.me\/[^\s"'`]*/g, "");
    code = code.replace(/whatsapp:\/\//g, "");

    if (code !== original) {
      fs.writeFileSync(file, code);
      changed++;
    }
  }
});

console.log("MIGRATION_DONE:", changed);
