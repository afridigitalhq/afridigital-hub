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

const files = walk(ROOT);

let ctaIssues = 0;
let waIssues = 0;

for (const file of files) {
  const code = fs.readFileSync(file, "utf8");

  // CTA enforcement
  if (code.includes("AfriWhatsapp") && !code.includes("AfriWhatsappCTA")) {
    ctaIssues++;
  }

  // WhatsApp link ban
  if (code.includes("wa.me") || code.includes("whatsapp://")) {
    waIssues++;
  }

  // coupling check
  if (code.includes("AfriWhatsApp") && code.includes("AfriCCTV")) {
    console.log("COUPLING RISK:", file);
  }
}

console.log("CTA_VIOLATIONS:", ctaIssues);
console.log("WHATSAPP_VIOLATIONS:", waIssues);
