export class WindowAudioEngine {
  focusSound(window) {
    const audio = new Audio("/sounds/focus.mp3");

    const pan = (window.x / window.screenWidth) * 2 - 1;

    audio.volume = 0.4;
    audio.play().catch(() => {});

    return { pan };
  }

  alert(type = "notify") {
    const audio = new Audio(
      type === "error"
        ? "/sounds/error.mp3"
        : "/sounds/notify.mp3"
    );

    audio.volume = 0.3;
    audio.play().catch(() => {});
  }
}
