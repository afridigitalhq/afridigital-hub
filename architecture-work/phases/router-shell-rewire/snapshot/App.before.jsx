import React from "react";
import AfriDigitalShell from "./core/shell/AfriDigitalShell";
import AppRouter from "./routes/AppRouter";

export default function App() {
  return (
    <AfriDigitalShell>
      <AppRouter />
    </AfriDigitalShell>
  );
}
