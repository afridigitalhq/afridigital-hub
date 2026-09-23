import React from "react";

class AfriRuntimeErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, componentStack: "" };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error("AFRI_RUNTIME_ERROR", error, info);
    this.setState({ componentStack: info?.componentStack || "" });
  }

  render() {
    if (this.state.error) {
      return (
        <pre style={{
          padding: "20px",
          whiteSpace: "pre-wrap",
          color: "#ff6b6b",
          background: "#090909",
          minHeight: "100vh",
          fontFamily: "monospace",
          boxSizing: "border-box"
        }}>
          {`AFRI RUNTIME ERROR\n\n${this.state.error?.stack || this.state.error?.message || this.state.error}

REACT COMPONENT STACK
${this.state.componentStack || "Component stack unavailable"}`}
        </pre>
      );
    }

    return this.props.children;
  }
}
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "../styles.css";
import "./core/theme/afridigital.tokens.css";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/afriforex-notifications-sw.js")
      .then(() => console.log("🟢 AfriForex notification service worker registered"))
      .catch((error) => console.error("🔴 AfriForex notification service worker failed", error));
  });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AfriRuntimeErrorBoundary>
        <App />
      </AfriRuntimeErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
