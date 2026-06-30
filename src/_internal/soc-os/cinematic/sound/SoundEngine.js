export class SoundEngine {
  play(type) {
    const audio = new Audio();

    switch(type) {
      case "click":
        audio.src = "/sounds/click.mp3";
        break;

      case "notify":
        audio.src = "/sounds/notify.mp3";
        break;

      case "error":
        audio.src = "/sounds/error.mp3";
        break;

      default:
        return;
    }

    audio.volume = 0.4;
    audio.play().catch(() => {});
  }
}
