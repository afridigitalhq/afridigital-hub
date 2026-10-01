import React from "react";

function formatDuration(ms) {
  if (ms === null || ms === undefined) return "—";
  if (ms < 1000) return `${ms} ms`;
  return `${(ms / 1000).toFixed(2)} s`;
}

export default function A2AActivity({ telemetry }) {
  const activity = telemetry?.activity || [];

  return (
    <section className="a2a-panel">
      <div className="a2a-section-heading">
        <div>
          <span>AGENT-TO-AGENT ACTIVITY</span>
          <h2>Activity</h2>
        </div>
        <small>{activity.length} RECORDED</small>
      </div>

      {!activity.length ? (
        <div className="a2a-empty-state">
          <strong>No A2A activity yet</strong>
          <p>Real requests, tasks and agent contacts will appear here.</p>
        </div>
      ) : (
        <div className="a2a-activity-list">
          {activity.map(item => (
            <article className="a2a-activity-item" key={item.id}>
              <div className="a2a-activity-route">
                <strong>{item.sourceAgentId || "UNKNOWN"}</strong>
                <span className="a2a-activity-arrow">→</span>
                <strong>{item.targetAgentId || item.agentId || "UNKNOWN"}</strong>
              </div>

              <div className="a2a-activity-meta">
                <span className="a2a-activity-capability">
                  {item.capability || "—"}
                </span>
                <span className={`a2a-activity-status status-${String(item.status || "UNKNOWN").toLowerCase()}`}>
                  {item.status || "—"}
                </span>
                <span className="a2a-activity-duration">
                  {formatDuration(item.durationMs)}
                </span>
              </div>

              <small className="a2a-activity-task">
                {item.taskId || item.id}
              </small>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
