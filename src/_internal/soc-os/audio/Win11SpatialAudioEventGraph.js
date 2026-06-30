export class Win11SpatialAudioEventGraph {

  emit(event, intensity = 1) {
    return {
      event,
      spatial: true,
      intensity,
      field: "window_focus_audio_layer"
    };
  }

}
