export function CommandBridge(kernel) {

  function execute(command) {
    switch(command.type) {

      case "VOICE":
      case "TEXT":
        // ONLY transform intent → state update
        kernel.dispatch({
          payload: {
            lastCommand: command.payload
          }
        });
        break;

      default:
        console.log("Unknown command");
    }
  }

  return { execute };
}
