const fs = require("fs");

const hookPath = "src/core/africctv/hooks/useAfriCCTVStream.js";

let code = fs.readFileSync(hookPath, "utf8");

// FIX 1: remove broken runtime reference safely
code = code.replace(/AfriVisionRuntime/g, "AfriCCTVDashboardRuntime");

// FIX 2: ensure correct import exists (no duplicates)
const importLine =
"import AfriCCTVDashboardRuntime from '../../afrivision/runtime/ui-adapters/AfriVisionDashboardRuntime.js';";

if (!code.includes("AfriCCTVDashboardRuntime")) {
  code = importLine + "\n" + code;
}

// FIX 3: safety cleanup (avoid broken module chaining)
code = code.replace(/undefined\s*\(\s*\)/g, "");

fs.writeFileSync(hookPath, code);

console.log("CCTV_RUNTIME_FIXED_OK");
