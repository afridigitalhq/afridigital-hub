import { useEffect, useRef, useState } from "react";
import AfriSportsEventTimeline from "./AfriSportsEventTimeline";
import AfriSportsIdentity from "./AfriSportsIdentity";

export default function AfriSportsMatchCenter({ match, activeFeature, loading, error }) {
  const safeMatch = match || {
    status: loading ? "Loading" : "Unavailable",
    minute:"--",
    competition:"AfriSports Radar",
    homeTeam: loading ? "Loading" : "Feed unavailable",
    awayTeam: loading ? "Loading" : (error ? "Provider unavailable" : "No match selected"),
    homeScore:0,
    awayScore:0
  };

  const arenaRef = useRef(null);
  const [fullscreen, setFullscreen] = useState(false);

  const enterFullscreen = async () => {
    try {
      if (arenaRef.current?.requestFullscreen) {
        await arenaRef.current.requestFullscreen();
      }
    } catch {}

    try {
      if (screen.orientation?.lock) {
        await screen.orientation.lock("landscape");
      }
    } catch {}

    setFullscreen(true);
  };

  const exitFullscreen = async () => {
    try {
      if (screen.orientation?.unlock) {
        screen.orientation.unlock();
      }
    } catch {}

    try {
      if (document.fullscreenElement && document.exitFullscreen) {
        await document.exitFullscreen();
      }
    } catch {}

    setFullscreen(false);
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      const active = Boolean(document.fullscreenElement);
      setFullscreen(active);

      if (!active) {
        try {
          if (screen.orientation?.unlock) {
            screen.orientation.unlock();
          }
        } catch {}
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <section
      ref={arenaRef}
      className={`afrisports-match-center${fullscreen ? " is-fullscreen" : ""}`}
    >
      <div className="afrisports-arena-toolbar">
        <div className="afrisports-arena-live">
          <span className="afrisports-live-dot" />
          <span>{safeMatch.status}</span>
          <small>{safeMatch.minute}</small>
        </div>

        <button
          type="button"
          className="afrisports-fullscreen-button"
          onClick={fullscreen ? exitFullscreen : enterFullscreen}
          aria-label={fullscreen ? "Exit fullscreen match view" : "Open fullscreen match view"}
          title={fullscreen ? "Exit fullscreen" : "Fullscreen"}
        >
          {fullscreen ? "⛶" : "⛶"}
        </button>
      </div>

      <div className="afrisports-pitch">
        <img
          className="afrisports-arena-image"
          src="/assets/images/afrisports-arena.png"
          alt="AfriSports Arena — Live African Sports, Global Stage"
        />
      </div>

      {activeFeature?.id === "event-timeline" ? (
        <AfriSportsEventTimeline match={safeMatch} />
      ) : (
        <div className="afrisports-match-card">
          <AfriSportsIdentity
            identity={safeMatch.competitionIdentity}
            size="sm"
            showName
            showCountry
          />

          <div className="afrisports-teams">
            <div className="afrisports-team">
              <AfriSportsIdentity
                identity={safeMatch.homeIdentity}
                size="lg"
                showName
                showCountry
                showType
              />
            </div>

            <div className="afrisports-score">
              <b>{safeMatch.homeScore}</b>
              <small>:</small>
              <b>{safeMatch.awayScore}</b>
            </div>

            <div className="afrisports-team">
              <AfriSportsIdentity
                identity={safeMatch.awayIdentity}
                size="lg"
                showName
                showCountry
                showType
              />
            </div>
          </div>

          <span className="afrisports-match-status">
            {safeMatch.minute} • {safeMatch.status}
          </span>

        </div>
      )}
      <button
        type="button"
        className="afrisports-watch-live-button"
        onClick={() => {
          if (safeMatch.raw?.liveStreamUrl) {
            window.open(safeMatch.raw.liveStreamUrl, "_blank", "noopener,noreferrer");
            return;
          }
          window.alert("Live match streaming will be available when the live streaming API is connected.");
        }}
        aria-label={`Watch ${safeMatch.homeTeam} vs ${safeMatch.awayTeam} live`}
      >
        Watch Live
      </button>
    </section>
  );
}
