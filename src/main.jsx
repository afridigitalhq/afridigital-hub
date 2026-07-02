import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import appBootstrap from "./core/bootstrap/AppBootstrap";

// Initialize AfriDigital ecosystem
appBootstrap.start();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
