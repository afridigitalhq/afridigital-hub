import React from "react";
import { BrowserRouter } from "react-router-dom";
import AfriDigitalShell from "./core/shell/AfriDigitalShell";
import AppRouter from "./routes/AppRouter";

export default function App(){
  return (
    <BrowserRouter>
      <AfriDigitalShell>
        <AppRouter />
      </AfriDigitalShell>
    </BrowserRouter>
  );
}
