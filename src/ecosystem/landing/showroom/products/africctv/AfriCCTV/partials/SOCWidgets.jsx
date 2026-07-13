export default function SOCWidgets(){

  const widgets = [
    {
      title: "THREAT LEVEL",
      value: "LOW",
      detail: "SECURITY ENVIRONMENT STABLE"
    },
    {
      title: "RECORDING STATUS",
      value: "ACTIVE",
      detail: "24/7 VIDEO CAPTURE ENABLED"
    },
    {
      title: "STORAGE HEALTH",
      value: "ONLINE",
      detail: "ENCRYPTED STORAGE READY"
    },
    {
      title: "AI ENGINE",
      value: "ACTIVE",
      detail: "THREAT DETECTION RUNNING"
    },
    {
      title: "CAMERA NETWORK",
      value: "04 ONLINE",
      detail: "ALL MONITORS CONNECTED"
    }
  ];

  return (
    <section className="soc-widgets">

      <header className="soc-header">
        <h2>
          Security Operations Center
        </h2>

        <span>
          LIVE INTELLIGENCE
        </span>
      </header>


      <div className="soc-grid">

        {widgets.map((widget) => (
          <div 
            className="soc-card"
            key={widget.title}
          >
            <span>
              {widget.title}
            </span>

            <strong>
              {widget.value}
            </strong>

            <small>
              {widget.detail}
            </small>

          </div>
        ))}

      </div>

    </section>
  );
}
