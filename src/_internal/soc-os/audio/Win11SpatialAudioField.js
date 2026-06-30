export class Win11SpatialAudioField {

  focus(windowId) {
    return {
      windowId,
      volume: 1.0,
      spatial: "center-focus",
      ambience: "reduced-background-noise"
    };
  }

  defocus(windowId) {
    return {
      windowId,
      volume: 0.4,
      spatial: "background-layer"
    };
  }
}
