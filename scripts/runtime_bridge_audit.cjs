const fs = require("fs");
const path = require("path");

const hits = [];

function walk(dir) {
  if (!fs.existsSync(dir)) return;

  for (const item of fs.readdirSync(dir)) {
    const file = path.join(dir, item);
    const stat = fs.statSync(file);

    if (stat.isDirectory()) {
      walk(file);
      continue;
    }

    if (!/\.(js|jsx|cjs)$/.test(file)) continue;

    const src = fs.readFileSync(file, "utf8");

    if (src.includes("new AfriVisionRuntime("))
      hits.push(["ENGINE_INSTANCE", file]);

    if (src.includes("useAfriVisionStream("))
      hits.push(["VISION_HOOK", file]);

    if (src.includes("getRuntime("))
      hits.push(["KERNEL_RUNTIME", file]);
  }
}

walk("src");

console.log("\n🧠 RUNTIME BRIDGE AUDIT");
console.table(hits);
console.log("\nTotal findings:", hits.length);
