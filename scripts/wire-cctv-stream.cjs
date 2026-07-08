const fs = require("fs");

const file = "src/pages/admin/modules/AfriCCTV/views/AfriCCTVView.jsx";

let code = fs.readFileSync(file, "utf8");

// ensure socket import exists
if (!code.includes("AfriCCTVSocket")) {
  code = `import AfriCCTVSocket from "../../../../core/ws/AfriCCTVSocket.js";\n` + code;
}

// wire stream safely
if (code.includes("useAfriCCTVStream()")) {
  code = code.replace(
    "useAfriCCTVStream()",
    "useAfriCCTVStream(new AfriCCTVSocket())"
  );
}

fs.writeFileSync(file, code);

console.log("CCTV_STREAM_WIRED");
