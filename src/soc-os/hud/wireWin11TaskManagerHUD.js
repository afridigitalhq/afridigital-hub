import SOCWin11TaskManagerHUD from "./SOCWin11TaskManagerHUD";

/**
 * 🪟 Wire Task Manager + Copilot HUD into runtime
 */

export function wireWin11HUD(runtime) {
  runtime.attachLayer?.("win11HUD", {
    mount: () => SOCWin11TaskManagerHUD({ runtime })
  });

  console.log("🧠 Win11 Task Manager + Copilot HUD ACTIVE");
}
