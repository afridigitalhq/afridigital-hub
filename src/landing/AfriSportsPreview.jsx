export default function AfriSportsPreview() {

  const matches = [
    { home: "Lagos FC", away: "Abuja Stars", score: "2 - 1", status: "LIVE" },
    { home: "Kano Kings", away: "Enugu Rangers", score: "0 - 0", status: "HT" },
    { home: "Port Harcourt", away: "Ibadan United", score: "3 - 2", status: "FT" }
  ];

  return (
    <section style={{
      padding: "50px 20px",
      background: "#050814",
      color: "#fff"
    }}>

      <h2 style={{
        textAlign: "center",
        fontSize: "28px",
        marginBottom: "25px"
      }}>
        ⚽ AfriSports Live
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "15px"
      }}>
        {matches.map((m, i) => (
          <div key={i} style={{
            border: "1px solid #00ffb3",
            borderRadius: "12px",
            padding: "16px",
            background: "rgba(255,255,255,0.03)"
          }}>
            <div style={{ fontWeight: "700" }}>
              {m.home} vs {m.away}
            </div>

            <div style={{
              marginTop: "10px",
              fontSize: "20px",
              color: "#00ffb3"
            }}>
              {m.score}
            </div>

            <div style={{
              marginTop: "8px",
              fontSize: "12px",
              opacity: 0.7
            }}>
              ● {m.status}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
