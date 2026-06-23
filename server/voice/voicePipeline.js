export function processVoiceInput(text) {
  return {
    transcript: text,
    processed: true,
    mode: "afriai-voice"
  };
}
