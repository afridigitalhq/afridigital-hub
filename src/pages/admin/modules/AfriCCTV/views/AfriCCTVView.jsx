import React from "react";
import AfriCCTVSocket from "../../../../../core/ws/AfriCCTVSocket.js";
import useAfriCCTVStream from "../../../../../core/africctv/hooks/useAfriCCTVStream";
import LeftSidebar from "../partials/LeftSidebar";
import TopStatusBar from "../partials/TopStatusBar";
import CameraGrid from "../partials/CameraGrid";
import RightControlPanel from "../partials/RightControlPanel";
import CameraFilmstrip from "../partials/CameraFilmstrip";
import AfriAIDock from "../partials/AfriAIDock";
import EvidenceTimelinePanel from "../partials/EvidenceTimelinePanel";
import PlaybackPanel from "../partials/PlaybackPanel";

export default function AfriCCTVView(){
  const stream = useAfriCCTVStream(new AfriCCTVSocket());
  const latest = stream.at(-1) || {};

  const cameras = stream.flatMap(item => item.cameras || []);
  const wallCameras = stream.flatMap(item => item.wall?.cameras || []);
  const observations = stream.flatMap(
    item => item.aiObservation?.observations || []
  );
  const evidence = stream.flatMap(
    item => item.evidence ? [item.evidence] : []
  );
  const playback = stream.flatMap(
    item => item.playback ? [item.playback] : []
  );

  return (
    <main className="africctv-shell">
      <aside className="africctv-shell__sidebar">
        <LeftSidebar />
      </aside>

      <section className="africctv-shell__workspace">
        <header className="africctv-shell__topbar">
          <TopStatusBar streamSession={latest} />
        </header>

        <div className="africctv-shell__body">
          <section className="africctv-shell__main">
            <div className="africctv-region africctv-region--camera-wall">
              <CameraGrid cameras={cameras} />
            </div>

            <div className="africctv-region africctv-region--filmstrip">
              <CameraFilmstrip cameras={wallCameras} />
            </div>

            <div className="africctv-region africctv-region--ai">
              <AfriAIDock observations={observations} />
            </div>

            <div className="africctv-region africctv-region--evidence">
              <EvidenceTimelinePanel evidence={evidence} />
            </div>

            <div className="africctv-region africctv-region--playback">
              <PlaybackPanel playback={playback} />
            </div>
          </section>

          <aside className="africctv-shell__controls">
            <RightControlPanel cameras={cameras} />
          </aside>
        </div>
      </section>
    </main>
  );
}
