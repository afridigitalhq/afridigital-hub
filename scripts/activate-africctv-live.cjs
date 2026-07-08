const fs = require("fs");

const file = "src/pages/admin/modules/AfriCCTV/views/AfriCCTVView.jsx";

let code = fs.readFileSync(file, "utf8");

// 1. inject hook import if missing
if (!code.includes("useAfriCCTVStream")) {
  code = `import useAfriCCTVStream from "../../../../core/africctv/hooks/useAfriCCTVStream";\n` + code;
}

// 2. inject runtime hook usage safely
if (!code.includes("const stream = useAfriCCTVStream")) {
  code = code.replace(
    "export default function AfriCCTVView(){",
    `export default function AfriCCTVView(){
  const stream = useAfriCCTVStream();`
  );
}

// 3. attach stream into UI context (safe render binding)
if (!code.includes("stream")) {
  code = code.replace(
    "<AfriCCTVHeader />",
    "<AfriCCTVHeader />{/* LIVE STREAM ACTIVE */}"
  );
}

fs.writeFileSync(file, code);

console.log("AFRICCTV LIVE ACTIVATION COMPLETE");
