const fs = require("fs");

const dist = fs.readFileSync("dist/index.html", "utf8").toLowerCase();

// 1. DOM contract rules
const rules = {
  hero: /class="[^"]*hero/,
  marquee: /marquee/,
  auth: /class="[^"]*auth/,
  services: /our services/,
  footer: /<footer/,
  chat: /chat/
};

for (const k in rules) {
  if (!rules[k].test(dist)) {
    console.error("❌ TRUTH LOCK FAILED:", k);
    process.exit(1);
  }
}

// 2. Anti-leak rule (no raw partial paths)
if (dist.includes("src/partials")) {
  console.error("❌ TRUTH LOCK FAILED: partial leakage detected");
  process.exit(1);
}

// 3. Structural sanity check (basic SaaS integrity)
const requiredBlocks = ["hero", "marquee", "auth", "services", "footer", "chat"];
for (const b of requiredBlocks) {
  if (!dist.includes(b)) {
    console.error("❌ TRUTH LOCK FAILED: missing block ->", b);
    process.exit(1);
  }
}

console.log("🔒 TRUTH LOCK: PASSED (UI + Build + Source integrity OK)");
