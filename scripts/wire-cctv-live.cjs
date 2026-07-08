const fs = require("fs");

const file = "src/pages/admin/modules/AfriCCTV/views/AfriCCTVView.jsx";
let code = fs.readFileSync(file, "utf8");

// ensure socket instance is created once
if (!code.includes("new StreamClient")) {
  code = code.replace(
    "const stream = useAfriCCTVStream();",
    `const streamSource = new StreamClient();
  const stream = useAfriCCTVStream(streamSource);`
  );
}

// ensure import exists
if (!code.includes("StreamClient")) {
  code = `import { StreamClient } from "../../../../core/ws/AfriCCTVSocket.js";\n` + code;
}

fs.writeFileSync(file, code);
console.log("CCTV_LIVE_WIRED");
