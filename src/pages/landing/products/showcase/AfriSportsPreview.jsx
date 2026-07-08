export default function AfriSportsPreview({onExplore}) {
  return (
    <section className="glass-card product-showcase">
      <h3>⚽ AfriSports Match Center</h3>

      <p>Live sports ecosystem experience</p>

      <div className="sports-preview">
        🟢 LIVE MATCH
        <br />
        Team A 2 - 1 Team B
        <br />
        📊 Match Statistics
      </div>

      <button onClick={onExplore}>
        Explore AfriSports
      </button>
    </section>
  );
}
