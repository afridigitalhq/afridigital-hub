export class ResumeSoundEngine {
  play(stage) {
    const audio = new Audio();

    switch(stage) {
      case "boot":
        audio.src = "/sounds/boot.mp3";
        break;

      case "unlock":
        audio.src = "/sounds/unlock.mp3";
        break;

      case "restore":
        audio.src = "/sounds/restore.mp3";
        break;

      case "ready":
        audio.src = "/sounds/ready.mp3";
        break;

      default:
        return;
    }

    audio.volume = 0.35;
    audio.play().catch(() => {});
  }
}
