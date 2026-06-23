export class OSAudioImmersion {

  play(event) {
    const sounds = {
      boot: "boot-chime.mp3",
      login: "login-sound.mp3",
      open: "window-open.mp3",
      error: "error-beep.mp3"
    };

    return sounds[event] || null;
  }
}
