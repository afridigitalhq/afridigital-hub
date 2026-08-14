import fs from "fs";
import path from "path";

const ROOT = path.resolve("src/core");

const patterns = [
  "security",
  "guard",
  "approval",
  "policy",
  "kill",
  "switch",
  "contract",
  "evidence",
  "gateway",
  "runtime",
  "registry"
];

const AfriNexusCapabilityScanner = {
  scan() {
    const results = [];

    function walk(dir) {
      for (const item of fs.readdirSync(dir)) {
        const full = path.join(dir, item);

        if (fs.statSync(full).isDirectory()) {
          walk(full);
        } else {
          const lower = item.toLowerCase();

          if (patterns.some(p => lower.includes(p))) {
            results.push({
              file: full.replace(process.cwd() + "/", ""),
              matched: patterns.filter(p => lower.includes(p))
            });
          }
        }
      }
    }

    walk(ROOT);

    return {
      type: "AFRINEXUS_CAPABILITY_SCAN",
      total: results.length,
      capabilities: results,
      timestamp: Date.now()
    };
  }
};

export default AfriNexusCapabilityScanner;
