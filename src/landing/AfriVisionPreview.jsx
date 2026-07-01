export default function AfriVisionPreview() {

  const feeds = [
    { name: "Gate 01", status: "LIVE", color: "#00ffb3" },
    { name: "Office Floor", status: "LIVE", color: "#00b3ff" },
    { name: "Warehouse", status: "LIVE", color: "#ffcc00" },
    { name: "Perimeter", status: "STABLE", color: "#22ff99" }
  ];

  return (
    <section style={{
      padding: "50px 20px",
      background: "#020617",
      color: "#fff"
    }}>

      <h2 style={{
        textAlign: "center",
        marginBottom: "25px",
        fontSize: "28px"
      }}>
        🎥 AfriVision Monitoring
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "15px"
      }}>
        {feeds.map((f, i) => (
          <div key={i} style={{
            border: `1px solid ${f.color}`,
            borderRadius: "12px",
            padding: "16px",
            background: "rgba(255,255,255,0.03)"
          }}>
            <div style={{
              fontWeight: "700",
              marginBottom: "8px"
            }}>
              {f.name}
            </div>

            <div style={{
              fontSize: "12px",
              color: f.color
            }}>
              ● {f.status}
            </div>

            <div style={{
              marginTop: "10px",
              height: "80px",
              background: "linear-gradient(90deg, rgba(0,255,179,0.1), rgba(0,0,0,0.2))",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "11px",
              opacity: 0.6
            }}>
              LIVE CAMERA FEED MOCK
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
