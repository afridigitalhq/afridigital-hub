const fs = require("fs");
const path = require("path");

const ROOT = "src";

function walk(dir, files = []) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) walk(full, files);
    else if (full.endsWith(".jsx") || full.endsWith(".js")) files.push(full);
  }
  return files;
}

walk(ROOT).forEach(file => {
  let code = fs.readFileSync(file, "utf8");

  const matches =
    (code.match(/AfriWhatsappCTA/g) || []).length;

  if (matches > 1) {
    console.log("DUPLICATE CTA USAGE:", file);
  }
});
