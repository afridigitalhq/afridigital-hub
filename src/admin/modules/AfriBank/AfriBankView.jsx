import React from "react";

export default function AfriBankView() {
  const panels = [
    "Wallet Summary",
    "Ledger",
    "Transactions",
    "Billing & Subscriptions",
    "Payment Gateways",
    "System Status"
  ];

  return (
    <div style={{ padding: 20, color: "#fff" }}>
      <h2>💰 AfriBank Command Center</h2>
      <p>Frontend workspace shell. Backend services provide all business logic.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: 16,
          marginTop: 20
        }}
      >
        {panels.map((title) => (
          <div
            key={title}
            style={{
              border: "1px solid #2b3440",
              borderRadius: 10,
              padding: 16,
              background: "#111827"
            }}
          >
            <h3>{title}</h3>
            <p>Waiting for backend data…</p>
          </div>
        ))}
      </div>
    </div>
  );
}
