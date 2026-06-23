export function useSOCVoice(onCommand) {
  function start() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) return;

    const rec = new SpeechRecognition();
    rec.continuous = true;
    rec.lang = "en-US";

    rec.onresult = (e) => {
      const text = e.results[e.results.length - 1][0].transcript;
      onCommand(text);
    };

    rec.start();
  }

  return { start };
}
