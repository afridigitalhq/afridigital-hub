import React, { useMemo } from "react";

/**
 * AfriVision 16-Frame Grid Renderer
 * Consumes layout from AfriVisionGridEngine
 */

export default function AfriVisionGridRenderer({ layout = [] }) {
  // Normalize layout safely
  const grid = useMemo(() => {
    const safe = Array.isArray(layout) ? layout : [];
    const filled = new Array(16).fill(null);

    safe.forEach((item) => {
      if (item && typeof item.position === "number") {
        filled[item.position] = item;
      }
    });

    return filled;
  }, [layout]);

  // Render tile size class
  const getClass = (size) => {
    switch (size) {
      case "LARGE":
        return "tile large";
      case "MEDIUM":
        return "tile medium";
      case "SMALL":
        return "tile small";
      case "FADED":
        return "tile faded";
      default:
        return "tile";
    }
  };

  return (
    <div className="afri-grid-wrapper">
      <div className="afri-grid">
        {grid.map((tile, index) => (
          <div key={index} className={getClass(tile?.size)}>
            {tile ? (
              <div className="feed-card">
                <div className="feed-header">
                  <span className="feed-title">
                    {tile.feed || "UNKNOWN FEED"}
                  </span>
                  <span className="feed-score">
                    {tile.score ?? 0}
                  </span>
                </div>

                <div className="feed-body">
                  <div>Signal: {tile.signal || "N/A"}</div>
                  <div>Intensity: {tile.intensity ?? 0}</div>
                  <div>Motion: {tile.motion ? "YES" : "NO"}</div>
                </div>

                {tile.size === "LARGE" && (
                  <div className="focus-indicator">
                    🔴 FOCUS FEED
                  </div>
                )}
              </div>
            ) : (
              <div className="empty-tile">Idle</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
