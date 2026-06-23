export function AfriAiVoiceRouter(voiceEngine) {
  return {
    speak(input) {
      if (input.startsWith("AfriAi")) {
        const command = input.replace("AfriAi", "").trim();
        return voiceEngine.listen(command);
      }
    }
  };
}
