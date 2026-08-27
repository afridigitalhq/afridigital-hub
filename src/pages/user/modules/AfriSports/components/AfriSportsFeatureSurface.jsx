export default function AfriSportsFeatureSurface({ feature, onClose }) {
  if (!feature) return null;

  return (
    <div className="afrisports-feature-surface" role="dialog" aria-modal="true" aria-labelledby="afrisports-feature-title">
      <div className="afrisports-feature-surface-backdrop" onClick={onClose} />

      <section className="afrisports-feature-surface-panel">
        <header className="afrisports-feature-surface-header">
          <div className="afrisports-feature-surface-heading">
            <span className="afrisports-feature-surface-icon">{feature.icon}</span>
            <div>
              <span className="afrisports-kicker">AFRISPORTS FEATURE</span>
              <h2 id="afrisports-feature-title">{feature.label}</h2>
              <p>{feature.description}</p>
            </div>
          </div>

          <button
            type="button"
            className="afrisports-feature-surface-close"
            onClick={onClose}
            aria-label="Close AfriSports feature"
            title="Close"
          >
            ×
          </button>
        </header>

        <div className="afrisports-feature-surface-body">
          <span className="afrisports-feature-surface-status">FEATURE WORKSPACE</span>
          <h3>{feature.label}</h3>
          <p>
            This AfriSports experience is ready for its dedicated feature
            implementation and live match data connection.
          </p>
        </div>
      </section>
    </div>
  );
}
