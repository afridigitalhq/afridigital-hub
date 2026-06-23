export function multiCameraDirector(setViewport, setCameraState) {
  let activeCamera = "main";

  return (prediction, event) => {
    const cam = prediction?.camera || "cinematic_focus";

    // 🎥 camera switching logic (broadcast style)
    if (cam !== activeCamera) {
      activeCamera = cam;

      setCameraState({
        active: cam,
        transition: "crossfade"
      });
    }

    // viewport movement
    if (cam === "zoom_cluster") {
      setViewport((vp) => ({ ...vp, zoom: 2.2 }));
    }

    if (cam === "wide_pan") {
      setViewport((vp) => ({ ...vp, zoom: 0.9 }));
    }

    if (cam === "cinematic_focus") {
      setViewport((vp) => ({ ...vp, zoom: 1.6 }));
    }
  };
}
