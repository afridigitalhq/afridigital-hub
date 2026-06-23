export class Win11GlobalAudioField {

  focus(window) {
    return {
      spatial: true,
      source: window.id,
      intensity: 1,
      mode: "win11_focus_audio_field"
    };
  }

}
