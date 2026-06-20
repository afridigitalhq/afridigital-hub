export function bindChatToOS(loop, commander) {

  return function onUserMessage(message) {

    // 🧠 feed back into OS brain
    const response = loop.respond(message);

    // optional re-analysis cycle
    const report = commander.analyze({ type: "USER_QUERY", message });

    return {
      response,
      report
    };
  };
}
