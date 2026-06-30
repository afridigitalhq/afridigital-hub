import React from "react";
import useAfriStream from "../core/reactive/useAfriStream";

export default function AdminHome() {
  const lastEvent = useAfriStream("AFRIAI_COMMAND");

  return (
    <div style={{padding:"40px",fontFamily:"sans-serif"}}>
      <h1>🛡️ AfriDigital Admin Home</h1>

      <p>Admin architecture active.</p>

      {lastEvent && (
        <div style={{marginTop:20, color:"red"}}>
          ⚡ Live System Event: {JSON.stringify(lastEvent.data)}
        </div>
      )}
    </div>
  );
}
