import AfriSportsFeatureLauncher from "./AfriSportsFeatureLauncher";
import AfriSportsIdentity from "./AfriSportsIdentity";

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
            key={fixture.raw?.id ?? `${fixture.homeTeam}-${fixture.awayTeam}`}
          >
            <AfriSportsIdentity
              identity={fixture.homeIdentity}
              size="sm"
            />

            <span className="afrisports-fixture-meta">
              {fixture.kickoff || fixture.minute || fixture.status}
              {fixture.competitionIdentity && (
                <AfriSportsIdentity
                  identity={fixture.competitionIdentity}
                  size="xs"
                  showName
                />
              )}
            </span>

            <AfriSportsIdentity
              identity={fixture.awayIdentity}
              size="sm"
            />
          </div>
        ))}
      </div>
    </aside>
  );
}
