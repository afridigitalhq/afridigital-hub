const fs = require("fs");

const html = fs.readFileSync("dist/index.html", "utf8").toLowerCase();

// DOM contract rules (STRUCTURAL, not text-based)
const contract = {
  hero: /<section[^>]*class="[^"]*hero[^"]*"/,
  marquee: /class="[^"]*marquee[^"]*"/,
  auth: /class="[^"]*auth[^"]*"/,
  services: /<section[^>]*>[\s\S]*our services[\s\S]*<\/section>/,
  footer: /<footer[\s\S]*<\/footer>/,
  chat: /class="[^"]*chat-widget[^"]*"/
};

for (const key in contract) {
  if (!contract[key].test(html)) {
    console.error("❌ DOM CONTRACT FAILED:", key);
    process.exit(1);
  }
}

console.log("✅ DOM CONTRACT ENFORCER: PASS");
