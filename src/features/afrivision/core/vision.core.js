/**
 * AfriVision Core Engine
 * Pure logic layer — NO UI, NO React, NO DOM
 */

export function createVisionEngine() {
  const state = {
    motion: false,
    cameras: [],
    alerts: [],
    status: "stable",
  };

  function updateMotion(value) {
    state.motion = value;
    state.status = value ? "alert" : "stable";
  }

  function pushAlert(alert) {
    state.alerts.push({
      id: Date.now(),
      message: alert,
      timestamp: new Date().toISOString()
    });
  }

  function registerCamera(camera) {
    state.cameras.push(camera);
  }

  function getState() {
    return { ...state };
  }

  return {
    updateMotion,
    pushAlert,
    registerCamera,
    getState
  };
}
