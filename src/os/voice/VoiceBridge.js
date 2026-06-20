export class VoiceBridge {
  constructor(loop) {
    this.loop = loop;
  }

  // 🔊 system output
  speak(text) {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      const msg = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(msg);
    }
  }

  // 🎤 optional browser speech input hook
  listen(callback) {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) return;

    const rec = new SpeechRecognition();
    rec.continuous = true;

    rec.onresult = (e) => {
      const text = e.results[e.results.length - 1][0].transcript;
      callback(text);
    };

    rec.start();
  }
}
