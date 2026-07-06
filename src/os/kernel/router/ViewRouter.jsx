import React from "react";


export default function ViewRouter({ activeDashboard, dagData }) {

  switch (activeDashboard) {

    case "afriscan":
    case "warroom":
      return <WarRoomShell dagData={dagData} />;

    case "afribank":
      return <div>🏦 AfriBank Module (placeholder)</div>;

    case "afriai":
      return <div>🤖 AfriAI Module (placeholder)</div>;

    case "whatsapp":
      return <div>💬 AfriVision Module (placeholder)</div>;

    case "security":
      return <div>🛡 Security Module (placeholder)</div>;

    default:
      return <div>🧠 Unknown Module</div>;
  }
}
