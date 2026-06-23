export function attachVoiceSubscriber(spine, narrator) {
  spine.subscribe((event) => {
    if (event.type === "VOICE_COMMAND") {
      narrator?.speak?.("Voice command received: " + event.payload.command);
    }

    if (event.type === "INTERRUPT_EVENT") {
      narrator?.speak?.("System interrupt triggered.");
    }
  });
}
