import React, { useEffect, useRef, useState } from "react";
import "./AfriCCTV.css";

const cameras = [
  { id: "01", name: "Main Entrance", image: "/mock/compound-feed.jpg" },
  { id: "02", name: "Living Room", image: "/mock/living-room-feed.jpg" },
  { id: "03", name: "Car Park", image: "/mock/car-park-feed.jpg" },
  { id: "04", name: "Building Site", image: "/mock/building-site-feed.jpeg" }
];

export default function AfriCCTV() {
  const [activeCamera, setActiveCamera] = useState("01");
  const [fullscreenCamera, setFullscreenCamera] = useState(null);
  const fullscreenFeedRef = useRef(null);
  const [liveTime, setLiveTime] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setLiveTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedLiveTime = liveTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });
  const enterFullscreen = async (id) => {
    setFullscreenCamera(id);
    requestAnimationFrame(async () => {
      try {
        const element = fullscreenFeedRef.current;
        if (element && !document.fullscreenElement && element.requestFullscreen) {
          await element.requestFullscreen();
        }
      } catch {}
      try {
        if (screen.orientation?.lock) {
          await screen.orientation.lock("landscape");
        }
      } catch {}
    });
  };

  const exitFullscreen = async () => {
    try {
      if (screen.orientation?.unlock) screen.orientation.unlock();
    } catch {}
    try {
      if (document.fullscreenElement && document.exitFullscreen) {
        await document.exitFullscreen();
      }
    } catch {}
    setFullscreenCamera(null);
  };
  const [cameraState, setCameraState] = useState(() => Object.fromEntries(cameras.map((camera) => [camera.id, { playing: true, favorite: false }])));

  const updateCamera = (id, patch) => {
    setCameraState((current) => ({ ...current, [id]: { ...current[id], ...patch } }));
  }

  return (
    <section className="africtv-user-surface">
      <header className="africtv-header">
        <div>
          <span className="africctv-eyebrow">AFRICCTV</span>
          <h1>Secure Vision</h1>
          <p>Monitor, manage and protect your connected spaces.</p>
        </div>

        <div className="africctv-status">
          <span className="africctv-status-dot" />
          SYSTEM ONLINE
        </div>
      </header>

      <div className="africctv-frame">
        <aside className="africctv-side-panel africctv-left-panel">
          <div className="africctv-panel-heading">
            <span>CAMERAS</span>
            <strong>Live View</strong>
          </div>

          {cameras.map((camera) => (
            <button
              type="button"
              key={camera.id}
              className={`africctv-camera-item ${
                activeCamera === camera.id ? "active" : ""
              }`}
              onClick={() => setActiveCamera(camera.id)}
            >
              <span className="africctv-camera-dot" />
              {camera.name}
              <small>
                {activeCamera === camera.id ? "LIVE" : "READY"}
              </small>
            </button>
          ))}
        </aside>

        <main className="africctv-main-frame">
          <div className="africctv-feed-grid">
            {cameras.map((camera) => (
              <article
                key={camera.id}
                className={`africctv-feed ${
                  activeCamera === camera.id ? "active" : ""
                } ${fullscreenCamera === camera.id ? "fullscreen" : ""}`}
              >
                <img className={`africctv-mock-feed-image cam-${camera.id}`} src={camera.image || "/mock/compound-feed.jpg"} alt={`${camera.name} live camera feed`} /><div className="africctv-viewport-grid" />

                <div className="africtv-camera-overlay">
                  <span>
                    <b>● LIVE</b> · CAM {camera.id} · {camera.name.toUpperCase()}
                  </span>
                  <strong>{formattedLiveTime}</strong>
                </div>

                <div className="africtv-timestamp">
                  AFRICCTV · SECURE CHANNEL
                </div>

                <div className="africtv-camera-controls">
                  <button type="button" title="Rewind" onClick={() => updateCamera(camera.id, { playing: false })}>◀</button>
                  <button type="button" title={cameraState[camera.id].playing ? "Pause" : "Play"} onClick={() => updateCamera(camera.id, { playing: !cameraState[camera.id].playing })}>{cameraState[camera.id].playing ? "Ⅱ" : "▶"}</button>
                  <button type="button" title="Forward" onClick={() => updateCamera(camera.id, { playing: true })}>▶</button>
                  <button type="button" title="Fullscreen" onClick={() => enterFullscreen(camera.id)}>⛶</button>
                  <button type="button" title="Favorite" className={cameraState[camera.id].favorite ? "selected" : ""} onClick={() => updateCamera(camera.id, { favorite: !cameraState[camera.id].favorite })}>♥</button>
                </div>
              </article>
            ))}
          </div>

          {fullscreenCamera && (() => {
            const fullscreenCameraData = cameras.find((camera) => camera.id === fullscreenCamera);
            const fullscreenState = cameraState[fullscreenCamera];
            return (
              <div className="africtv-fullscreen-overlay" role="dialog" aria-modal="true">
                <div ref={fullscreenFeedRef} className="africtv-fullscreen-feed">
                  <img
                    className={`africctv-mock-feed-image cam-${fullscreenCamera}`}
                    src={fullscreenCameraData?.image || "/mock/compound-feed.jpg"}
                    alt={`${fullscreenCameraData?.name || "Camera"} fullscreen live camera feed`}
                  />
                  <div className="africctv-viewport-grid" />

                  <div className="africtv-camera-overlay">
                    <span>
                      <b>● LIVE</b> · CAM {fullscreenCamera} · {fullscreenCameraData?.name.toUpperCase()}
                    </span>
                    <strong>{formattedLiveTime}</strong>
                  </div>

                  <div className="africtv-fullscreen-timestamp">
                    AFRICCTV · SECURE CHANNEL
                  </div>

                  <div className="africtv-camera-controls">
                    <button type="button" title="Rewind" onClick={() => updateCamera(fullscreenCamera, { playing: false })}>◀</button>
                    <button
                      type="button"
                      title={fullscreenState.playing ? "Pause" : "Play"}
                      onClick={() => updateCamera(fullscreenCamera, { playing: !fullscreenState.playing })}
                    >
                      {fullscreenState.playing ? "Ⅱ" : "▶"}
                    </button>
                    <button type="button" title="Forward" onClick={() => updateCamera(fullscreenCamera, { playing: true })}>▶</button>
                    <button type="button" title="Exit fullscreen" aria-label="Exit fullscreen" onClick={exitFullscreen}>×</button>
                    <button
                      type="button"
                      title="Favorite"
                      className={fullscreenState.favorite ? "selected" : ""}
                      onClick={() => updateCamera(fullscreenCamera, { favorite: !fullscreenState.favorite })}
                    >♥</button>
                  </div>
                </div>
              </div>
            );
          })()}

          <section className="africtv-central-control">
            <div className="africtv-central-heading">
              <div>
                <span>CONTROL CENTER</span>
                <strong>Playback &amp; Recording</strong>
              </div>
              <small>Central system controls</small>
            </div>

            <div className="africtv-timeline">
              <div className="africtv-timeline-labels"><span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>24:00</span></div>
              <div className="africtv-timeline-track"><span className="africtv-timeline-progress" /><i /><i /><i /></div>
            </div>

            <div className="africtv-central-tools">
              <button type="button">◀</button>
              <button type="button" className="primary">▶</button>
              <button type="button">▶▶</button>
              <span className="africtv-playback-time">CAM {activeCamera} · 00:00:00</span>
              <button type="button">📷 Snapshot</button>
              <button type="button">⬇ Download Feed</button>
              <button type="button">▣ Export Clip</button>
            </div>

            <div className="africtv-central-row">
              <div className="africtv-camera-selector">
                <span>CAMERAS</span>
                {cameras.map((camera) => <button type="button" key={camera.id} className={activeCamera === camera.id ? "active" : ""} onClick={() => setActiveCamera(camera.id)}>CAM {camera.id}</button>)}
              </div>
              <div className="africtv-central-status"><span>RECORDING</span><strong>04 CHANNELS</strong><small>Timeline synchronized</small></div>
            </div>
          </section>
        </main>

        <aside className="africctv-side-panel africtv-right-panel">
          <div className="africtv-panel-heading">
            <span>SECURITY</span>
            <strong>System Status</strong>
          </div>

          <div className="africtv-stat">
            <span>Connected Cameras</span>
            <strong>04</strong>
          </div>

          <div className="africtv-stat">
            <span>Active Alerts</span>
            <strong>00</strong>
          </div>

          <div className="africctv-stat">
            <span>System Health</span>
            <strong className="online">ONLINE</strong>
          </div>

          <div className="africtv-event">
            <span>RECENT ACTIVITY</span>
            <p>No security events detected.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
