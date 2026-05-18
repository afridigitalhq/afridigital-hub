const fs = require("fs");

const path = "./server.js";
let code = fs.readFileSync(path, "utf8");

// remove any existing webhook (avoid duplicates)
code = code.replace(/app\.post\(["']\/webhook["'][\s\S]*?\n\}\);/g, "");

// inject clean webhook BEFORE listen
const webhook = `
app.post("/webhook", async (req, res) => {
  try {
    const { from, text } = req.body || {};
    console.log("📩 WEBHOOK HIT:", req.body);

    const afriAiLoop = require("./core/realtime/afriai-loop");
    await afriAiLoop(text, from);

    return res.json({ ok: true });
  } catch (e) {
    console.error("WEBHOOK ERROR:", e);
    return res.status(500).json({ ok: false });
  }
});
`;

code = code.replace(/app\.listen/, webhook + "\n\napp.listen");

fs.writeFileSync(path, code);

console.log("✅ webhook fixed cleanly");
