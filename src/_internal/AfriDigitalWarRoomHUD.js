import { OSCommandBus } from "../os/command-layer/OSCommandBus";

const bus = new OSCommandBus();

export function initWarRoomHUD() {

  // 🔥 PANIC MODE
  bus.on("PANIC_MODE", () => {
    bus.setMode("PANIC");
  });

  // ⏪ REPLAY MODE
  bus.on("REPLAY_MODE", () => {
    bus.toggle("replay");
  });

  // 🧿 SCRUBBER MODE
  bus.on("SCRUBBER_MODE", () => {
    bus.toggle("scrubber");
  });

  // 📦 ARCHIVE ENGINE
  bus.on("ARCHIVE_MODE", () => {
    bus.toggle("archive");
  });

  return bus;
}
