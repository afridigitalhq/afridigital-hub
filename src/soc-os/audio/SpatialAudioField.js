export class SpatialAudioField {
  playForWindow(window) {
    const audio = new Audio("/sounds/focus.mp3");

    const pan = (window.x / window.screenWidth) * 2 - 1;

    audio.volume = Math.min(0.8, 0.2 + window.focusLevel);
    audio.play().catch(() => {});

    return { pan };
  }

  playEvent(type) {
    const audio = new Audio(
      type === "alert"
        ? "/sounds/alert.mp3"
        : "/sounds/notify.mp3"
    );

    audio.volume = 0.3;
    audio.play().catch(() => {});
  }
}
