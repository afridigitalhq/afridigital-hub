export default function ForexCTA({ onExplore }) {
  return (
    <section className="forex-cta">
      <div>
        <span className="forex-label">EXPLORE</span>
        <h3>Discover AfriForex</h3>
      </div>
      <button type="button" onClick={onExplore}>
        Explore AfriForex
      </button>
    </section>
  );
}
