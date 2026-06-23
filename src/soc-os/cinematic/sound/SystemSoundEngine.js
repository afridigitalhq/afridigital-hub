export class SystemSoundEngine {
  play(type) {
    const sounds = {
      boot: "🔊 boot_chime",
      click: "🔊 click",
      notify: "🔊 notification",
      error: "🔊 error_pulse"
    };

    console.log(sounds[type] || "🔊 default_sound");
  }
}
