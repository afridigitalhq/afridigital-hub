export default function CCTVStatusPanel({runtime}) {

  const cameras = runtime?.cameras?.length ? runtime.cameras : [
    {id:"CAM-01",status:"ONLINE"},
    {id:"CAM-02",status:"ONLINE"},
    {id:"CAM-03",status:"ONLINE"},
    {id:"CAM-04",status:"ONLINE"}
  ];

  return (
    <aside className="cctv-status-panel">

      <h4>
        🎥 CCTV STATUS
      </h4>

      <div className="cctv-status-list">

        {cameras.map((feed) => (
          <div key={feed.id} className="cctv-status-item">

            <span>
              {feed.status === "ONLINE" ? "🔴" : "○"} {feed.id}
            </span>

            <span>
              {feed.status}
            </span>

          </div>
        ))}

      </div>

      <div className="cctv-ai-preview">

        <h5>
          🧠 AI MONITORING
        </h5>

        <p>
          Event detection layer ready
        </p>

      </div>

    </aside>
  );
}
