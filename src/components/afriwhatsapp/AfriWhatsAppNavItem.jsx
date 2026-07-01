import { useLocation } from "react-router-dom";

export default function AfriWhatsAppNavItem() {
  const location = useLocation();

  const connect = () => {
    const token = "AFRI_" + Date.now();
    window.open(
      `https://wa.me/YOUR_NUMBER?text=CONNECT_${token}`,
      "_blank"
    );
  };

  const isActive = location.pathname.includes("afri");

  return (
    <div
      onClick={connect}
      style={{
        cursor: "pointer",
        padding: "10px 12px",
        borderRadius: "10px",
        background: isActive ? "rgba(0,255,179,0.15)" : "transparent",
        border: "1px solid rgba(0,255,179,0.2)",
        color: "#fff",
        marginBottom: "10px",
        transition: "all 0.2s ease"
      }}
    >
      <div style={{ fontWeight: "600" }}>💚 AfriWhatsApp</div>
      <div style={{ fontSize: "11px", opacity: 0.7 }}>
        Connect • Chat • Access
      </div>
    </div>
  );
}
