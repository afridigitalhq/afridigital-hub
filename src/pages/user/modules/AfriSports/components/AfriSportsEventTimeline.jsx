import AfriSportsIdentity from "./AfriSportsIdentity";

export default function AfriSportsEventTimeline({ match }) {
  const rawEvents = match?.events || match?.timeline || [];
  const events = Array.isArray(rawEvents) ? rawEvents : [];

  const normalize = (event) => {
    const type = String(event.type || event.eventType || event.kind || "").toLowerCase();
    const detail = String(event.detail || event.description || event.event || "").toLowerCase();

    let category = "event";
    let icon = "•";

    if (type.includes("goal") || detail.includes("goal")) {
      category = "goal";
      icon = "⚽";
    } else if (type.includes("card") || detail.includes("yellow") || detail.includes("red")) {
      category = detail.includes("red") ? "red-card" : "yellow-card";
      icon = category === "red-card" ? "🟥" : "🟨";
    } else if (type.includes("subst") || type.includes("substitution") || detail.includes("substitution")) {
      category = "substitution";
      icon = "🔄";
    }

    const elapsed =
      event.time?.elapsed ??
      event.elapsed ??
      event.minute ??
      event.time ??
      "--";

    const extra = event.time?.extra ?? event.extra;
    const minute = extra ? `${elapsed}+${extra}` : `${elapsed}`;

    const player =
      event.player?.name ||
      event.playerName ||
      event.player ||
      "";

    const assist =
      event.assist?.name ||
      event.assistName ||
      "";

    const team =
      event.team?.name ||
      event.teamName ||
      event.team ||
      "";

    const teamIdentity = event.team?.id || event.team?.name
      ? {
          type: event.team?.national ? "national_team" : "team",
          name: String(event.team?.name || team),
          shortName: String(event.team?.short_code || event.team?.name || team),
          logo: event.team?.image_path || event.team?.logo || event.team?.logo_url || null,
          flag:
            event.team?.country?.flag ||
            event.team?.country?.emoji ||
            null,
          country:
            event.team?.country?.name ||
            event.team?.country_name ||
            null,
          countryCode:
            event.team?.country?.code ||
            event.team?.country_code ||
            null,
          id: event.team?.id || null,
          raw: event.team
        }
      : null;

    return {
      category,
      icon,
      minute,
      player: String(player),
      assist: String(assist),
      team: String(team),
      teamIdentity,
      detail: String(event.detail || event.description || "")
    };
  };

  const normalized = events.map(normalize).reverse();

  return (
    <div className="afrisports-event-timeline">
      <div className="afrisports-event-timeline-heading">
        <div>
          <span className="afrisports-kicker">LIVE MATCH EVENTS</span>
          <h3>⚡ Event Timeline</h3>
        </div>
        <span className="afrisports-event-live-badge">🟢 LIVE</span>
      </div>

      <div className="afrisports-event-timeline-list">
        {normalized.length === 0 ? (
          <div className="afrisports-event-empty">
            <span>⏱️</span>
            <strong>No match events yet</strong>
            <small>Goals, cards and substitutions will appear here in real time.</small>
          </div>
        ) : (
          normalized.map((event, index) => (
            <article
              className={`afrisports-event-row afrisports-event-${event.category}`}
              key={`${event.minute}-${event.player}-${event.team}-${index}`}
            >
              <span className="afrisports-event-minute">{event.minute}</span>
              <span className="afrisports-event-icon">{event.icon}</span>

              <div className="afrisports-event-content">
                <strong>{event.player || event.detail || "Match event"}</strong>

                {event.team && (
                  <span className="afrisports-event-team">
                    <AfriSportsIdentity
                      identity={event.teamIdentity}
                      size="xs"
                    />
                  </span>
                )}

                {event.assist && (
                  <small>Assist: {event.assist}</small>
                )}

                {!event.player && event.detail && (
                  <small>{event.detail}</small>
                )}
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
