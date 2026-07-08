const fs = require("fs");

const file = "src/core/ws/AfriCCTVSocket.js";
let code = fs.readFileSync(file, "utf8");

// inject dev emitter if missing
if (!code.includes("DEV_FEED")) {
  const patch = `
  // DEV MODE: simulated CCTV feed
  startDevFeed() {
    setInterval(() => {
      const frame = {
        type: "vision",
        ts: Date.now(),
        cameras: [
          { id: 1, status: "LIVE", motion: Math.random() },
          { id: 2, status: "LIVE", motion: Math.random() },
          { id: 3, status: "LIVE", motion: Math.random() }
        ]
      };

      this.ws?.onmessage?.({ data: JSON.stringify(frame) });
    }, 1500);
  }
`;

  code = code.replace("export class StreamClient {", 
    "export class StreamClient {" + patch);
}

fs.writeFileSync(file, code);
console.log("CCTV_DEV_FEED_ENABLED");
