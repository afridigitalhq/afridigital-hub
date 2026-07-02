import "./CommandCore.css";

export default function CommandCore() {
  return (
    <section className="command-core">

      <div className="command-core__pulse" />

      <div className="command-core__content">

        <div className="command-core__badge">
          AFRICA'S LIVING DIGITAL ECOSYSTEM
        </div>

        <h1 className="command-core__title">
          AFRIDIGITAL
        </h1>

        <p className="command-core__subtitle">
          Where Africa Watches, Plays, Trades, Builds and Connects.
        </p>

        <div className="command-core__dock">

          <button>Launch Platform</button>

          <button>Explore Ecosystem</button>

        </div>

        <div className="command-core__status">

          <span>🟢 AI ONLINE</span>

          <span>🟢 ECOSYSTEM READY</span>

          <span>🟢 LIVE SERVICES</span>

        </div>

      </div>

    </section>
  );
}
