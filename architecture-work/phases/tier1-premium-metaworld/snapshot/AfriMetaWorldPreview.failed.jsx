export default function AfriMetaWorldPreview({onExplore}) {
  return (
    <section className="glass-card product-showcase">
      <h3>🎮 AfriMetaWorld</h3>

      <p>Virtual world platform</p>

      <div className="metaworld-preview">
        🌍 Digital Universe Connected
        <br />
        🧑‍🚀 Virtual Experiences
        <br />
        🚀 Interactive Spaces
      </div>

      <button onClick={onExplore}>
        Enter AfriMetaWorld
      </button>
    </section>
  );
}
