import { useNavigate } from "react-router-dom";

export default function EcosystemGrid() {
  const navigate = useNavigate();

  const openWhatsApp = () => {
    const token = "AFRI_" + Date.now();
    window.open(`https://wa.me/YOUR_NUMBER?text=CONNECT_${token}`, "_blank");
  };

  const modules = [
    {
      title: "🎥 AfriVision",
      desc: "Live Monitoring & Security Intelligence",
      action: "Monitor Systems"
    },
    {
      title: "🧠 AfriAI",
      desc: "Creation • Automation • Decision Engine",
      action: "Use AI"
    },
    {
      title: "💚 AfriWhatsApp",
      desc: "Core Entry System for All Services",
      action: "Connect"
    },
    {
      title: "💼 AfriWork",
      desc: "Jobs • Remote Work • Income Streams",
      action: "Find Work"
    },
    {
      title: "🚀 AfriBoost",
      desc: "Ads • Growth • Promotion Engine",
      action: "Boost Content"
    },
    {
      title: "🛍 AfriCommerce",
      desc: "Sell • Buy • Scale Digital Stores",
      action: "Open Store"
    },
    {
      title: "🌐 AfriMetaWorld",
      desc: "Virtual Worlds & Simulation Space",
      action: "Enter World"
    }
  ];

  return (
    <section style={{
      padding: "60px 20px",
      background: "#050814",
      color: "#fff"
    }}>
      <h2 style={{
        textAlign: "center",
        fontSize: "32px",
        marginBottom: "40px"
      }}>
        Ecosystem Universe
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "18px"
      }}>
        {modules.map((m, i) => (
          <div key={i} style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(0,255,179,0.2)",
            borderRadius: "14px",
            padding: "18px",
            cursor: "pointer"
          }}>
            <h3 style={{ marginBottom: "8px" }}>{m.title}</h3>
            <p style={{ opacity: 0.7, fontSize: "13px" }}>{m.desc}</p>

            <button style={{
              marginTop: "12px",
              padding: "8px 12px",
              borderRadius: "8px",
              border: "none",
              background: "#00ffb3",
              cursor: "pointer"
            }}>
              {m.action}
            </button>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button
          onClick={openWhatsApp}
          style={{
            padding: "12px 18px",
            borderRadius: "10px",
            border: "none",
            background: "#00ffb3",
            fontWeight: "600",
            cursor: "pointer"
          }}
        >
          💚 Connect AfriWhatsApp (Unlock Ecosystem)
        </button>
      </div>
    </section>
  );
}
