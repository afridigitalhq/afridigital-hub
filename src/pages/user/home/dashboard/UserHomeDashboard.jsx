import React from "react";

const walletItems = [
  { label: "AfriCoin", value: "0 AFC", note: "AfriCoin balance", icon: "🪙", tone: "coin" },
  { label: "USD", value: "$0.00", note: "Dollar balance", icon: "💵", tone: "usd" },
  { label: "Nigeria", value: "₦0.00", note: "Naira balance · NGN", icon: "🇳🇬", tone: "naira" },
  { label: "Escrow", value: "₦0.00", note: "Funds held in escrow", icon: "🔐", tone: "escrow" }
];

const metrics = [
  { label: "Products", value: "0", note: "Products owned", icon: "🛍️" },
  { label: "Active Boosts", value: "0", note: "Currently active", icon: "🚀" },
  { label: "Orders", value: "0", note: "Total orders", icon: "📦" },
  { label: "Favorites", value: "0", note: "Saved items", icon: "❤️" },
  { label: "Services", value: "0", note: "Active services", icon: "⚡" },
  { label: "Notifications", value: "0", note: "Unread notifications", icon: "🔔" }
];

const quickActions = [
  { label: "Add Funds", icon: "＋", primary: true },
  { label: "Send", icon: "↗" },
  { label: "Withdraw", icon: "↙", primary: true },
  { label: "Marketplace", icon: "🛒" },
  { label: "Boost", icon: "🚀" },
  { label: "Transactions", icon: "↔" }
];

export default function UserHomeDashboard() {
  return (
    <section className="user-home-dashboard">
      <div className="user-home-dashboard-header">
        <span className="user-home-eyebrow">AfriDigital Dashboard</span>
        <h1>Welcome back</h1>
        <p>Your AfriDigital ecosystem at a glance.</p>
      </div>

      <section className="user-home-wallet-panel">
        <div className="user-home-section-heading">
          <div>
            <span>Wallet overview</span>
            <h2>Your balances</h2>
          </div>
          <small>Demo balance · Backend not connected</small>
        </div>

        <div className="user-home-wallet-grid">
          {walletItems.map((item) => (
            <article className={`user-home-wallet-card user-home-wallet-${item.tone}`} key={item.label}>
              <div className="user-home-wallet-icon">{item.icon}</div>
              <div>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <small>{item.note}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="user-home-metrics-panel">
        <div className="user-home-section-heading">
          <div>
            <span>Ecosystem activity</span>
            <h2>Account at a glance</h2>
          </div>
        </div>

        <div className="user-home-metrics-grid">
          {metrics.map((item) => (
            <article className="user-home-metric-card" key={item.label}>
              <span className="user-home-metric-icon">{item.icon}</span>
              <div>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <small>{item.note}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="user-home-actions-panel">
        <div className="user-home-section-heading">
          <div>
            <span>Shortcuts</span>
            <h2>Quick actions</h2>
          </div>
        </div>

        <div className="user-home-actions-grid">
          {quickActions.map((action) => (
            <button type="button" className={`user-home-action${action.primary ? " user-home-action-primary" : ""}`} key={action.label}>
              <span>{action.icon}</span>
              {action.label}
            </button>
          ))}
        </div>
      </section>
    </section>
  );
}
