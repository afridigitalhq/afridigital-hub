export default function UserHomeDashboard() {
  return (
    <section className="user-home-dashboard">
      <div className="user-home-dashboard-header">
        <span className="user-home-eyebrow">AfriDigital Dashboard</span>
        <h1>Welcome back</h1>
        <p>Your AfriDigital ecosystem at a glance.</p>
      </div>

      <div className="user-home-dashboard-grid">
        <article className="user-home-wallet">
          <span>Wallet</span>
          <strong>₦0.00</strong>
          <small>AfriCoin balance</small>
        </article>

        <article className="user-home-summary">
          <span>Account</span>
          <strong>Active</strong>
          <small>Your ecosystem access is ready.</small>
        </article>
      </div>
    </section>
  );
}
