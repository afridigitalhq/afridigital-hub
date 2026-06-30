import React from "react";
import SOCControlHUDKernel from "../control-hud/SOCControlHUDKernel";

export function wireSOCControlHUD(runtime) {
  if (!runtime) return;

  runtime.attachLayer("controlHUD", {
    mount: () => React.createElement(SOCControlHUDKernel, {
      runtime,
      enabled: true
    })
  });

  console.log("🧠 SOC CONTROL HUD WIRED INTO RUNTIME");
}
