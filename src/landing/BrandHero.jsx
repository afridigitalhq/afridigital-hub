import AfriWhatsAppFloatingCTA from "../components/afriwhatsapp/AfriWhatsAppFloatingCTA";

export default function BrandHero() {
  return (
    <section style={{
      minHeight: "90vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      background: "radial-gradient(circle at top, #0f172a, #000)",
      color: "#fff",
      padding: "20px"
    }}>

      <h1 style={{ fontSize: "52px", fontWeight: 800 }}>
        AFRIDIGITAL
      </h1>

      <p style={{ opacity: 0.8, marginTop: "10px" }}>
        Intelligent African Creation & Income Ecosystem
      </p>

      <p style={{ opacity: 0.6, marginTop: "8px" }}>
        Build • Earn • Promote • Work • Play • Scale • Monitor
      </p>

      <div style={{
        display: "flex",
        gap: "12px",
        marginTop: "25px",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        <button>Launch Platform</button>
        <button>Explore Ecosystem</button>
        <button>💚 Connect AfriWhatsApp</button>
      </div>

      <AfriWhatsAppFloatingCTA />

    </section>
  );
}
