import { initWarRoomHUD } from "../../warroom/AfriDigitalWarRoomHUD";

const bus = initWarRoomHUD();

export function OSCommand(input) {
  switch(input) {

    case "panic mode":
      bus.dispatch("PANIC_MODE");
      break;

    case "live replay mode":
      bus.dispatch("REPLAY_MODE");
      break;

    case "scrubber mode":
      bus.dispatch("SCRUBBER_MODE");
      break;

    case "archive engine":
      bus.dispatch("ARCHIVE_MODE");
      break;

    default:
      bus.dispatch("UNKNOWN_COMMAND", { input });
  }
}
