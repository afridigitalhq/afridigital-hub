const fs = require("fs");

const file = "src/core/ws/AfriCCTVSocket.js";
let code = fs.readFileSync(file, "utf8");

// add safety layer
if (!code.includes("onopen")) {
  code = code.replace(
    "this.ws = new WebSocket(AFRI_WS);",
    `this.ws = new WebSocket(AFRI_WS);

    this.ws.onopen = () => console.log("CCTV_WS_CONNECTED");
    this.ws.onerror = (e) => console.log("CCTV_WS_ERROR", e);
    this.ws.onclose = () => console.log("CCTV_WS_CLOSED");`
  );
}

fs.writeFileSync(file, code);
console.log("SOCKET_FIXED");
