import { useEffect, useState } from "react";

export default function AfriWhatsAppContextCard({ type = "general" }) {
  const [show, setShow] = useState(true);

  const connect = () => {
    const token = "AFRI_" + Date.now();
    window.open(
      `https://wa.me/YOUR_NUMBER?text=CONNECT_${token}`,
      "_blank"
    );
  };

  const getMessage = () => {
    switch (type) {
      case "earnings":
        return "Track your earnings instantly via WhatsApp";
      case "jobs":
        return "Get real-time job alerts on WhatsApp";
      case "boost":
        return "Boost your content directly from WhatsApp";
      case "commerce":
        return "Manage your store through WhatsApp commands";
      default:
        return "Connect AfriWhatsApp to unlock full ecosystem access";
    }
  };

  if (!show) return null;

  return (
    <div
      style={{
        margin: "16px 0",
        padding: "14px",
        borderRadius: "12px",
        background: "#0f172a",
        border: "1px solid rgba(0,255,179,0.25)",
        color: "#fff"
      }}
    >
      <div style={{ fontWeight: "600" }}>💚 AfriWhatsApp</div>
      <div style={{ fontSize: "13px", opacity: 0.8, marginTop: "6px" }}>
        {getMessage()}
      </div>

      <button
        onClick={connect}
        style={{
          marginTop: "10px",
          padding: "8px 12px",
          borderRadius: "8px",
          background: "#00ffb3",
          border: "none",
          cursor: "pointer",
          fontWeight: "600"
        }}
      >
        Connect WhatsApp
      </button>
    </div>
  );
}
