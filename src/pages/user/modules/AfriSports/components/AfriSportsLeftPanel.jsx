import AfriSportsFeatureLauncher from "./AfriSportsFeatureLauncher";

export default function AfriSportsLeftPanel({ fixtures = [], onFeatureSelect }) {
  return (
    <aside className="afrisports-panel afrisports-left-panel">
      <div className="afrisports-panel-heading">
        <span>Fixtures</span>
        <AfriSportsFeatureLauncher onSelect={onFeatureSelect} />
      </div>

      <div className="afrisports-fixture-list">
        {fixtures.map((fixture) => (
          <div
            className="afrisports-fixture-item"
            key={fixture.home + "-" + fixture.away}
          >
            <strong>{fixture.home}</strong>
            <span>{fixture.time}</span>
            <strong>{fixture.away}</strong>
          </div>
        ))}
      </div>
    </aside>
  );
}
