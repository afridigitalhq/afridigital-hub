import bus from "../eventbus/AfriEventBus";
import CommandRouter from "../../control-room/afrai/CommandRouter";

bus.on("AFRIAI_COMMAND", ({ data }) => {
  const result = CommandRouter.send(data.text);
  bus.emit("AFRIAI_RESPONSE", { result });
});
