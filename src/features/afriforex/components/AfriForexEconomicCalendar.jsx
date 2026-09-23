import React, { useEffect, useMemo, useState } from "react";

function formatMinutes(minutes) {
  if (!Number.isFinite(Number(minutes))) return "TIME UNKNOWN";

  const value = Number(minutes);

  if (value < 0) {
    const elapsed = Math.abs(value);
    if (elapsed < 60) return `${elapsed}m ago`;
    return `${Math.floor(elapsed / 60)}h ${elapsed % 60}m ago`;
  }

  if (value < 60) return `in ${value}m`;

  const hours = Math.floor(value / 60);
  const mins = value % 60;

  return mins ? `in ${hours}h ${mins}m` : `in ${hours}h`;
}

function formatCountdown(time, now) {
  if (!time) return "TIME UNKNOWN";
  const target = new Date(time).getTime();
  if (!Number.isFinite(target)) return "TIME UNKNOWN";
  const diff = target - now;
  if (diff <= 0) return "RELEASED";
  const totalMinutes = Math.ceil(diff / 60000);
  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const minutes = totalMinutes % 60;
  if (days > 0) return `${days}d ${hours}h ${minutes}m`;
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
}

function formatEventTime(time) {
  if (!time) return "TIME UNKNOWN";

  const parsed = new Date(time);

  if (Number.isNaN(parsed.getTime())) return "TIME UNKNOWN";

  return parsed.toLocaleString([], {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

export default function AfriForexEconomicCalendar({
  economicCalendar = null,
  selectedMarket = null
}) {
  const [activeMarket, setActiveMarket] = useState("FOREX");
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 10000);
    return () => window.clearInterval(timer);
  }, []);

  const events = Array.isArray(economicCalendar?.events)
    ? economicCalendar.events
    : [];

  const visibleEvents =
    activeMarket === "CRYPTO"
      ? events.filter((event) =>
          ["USD"].includes(
            String(event?.currency || "").trim().toUpperCase()
          )
        )
      : events;

  const status = String(
    economicCalendar?.status || "NOT_CONNECTED"
  ).toUpperCase();

  const riskLevel = String(
    economicCalendar?.riskLevel || "UNKNOWN"
  ).toUpperCase();

  const imminentEvents = Array.isArray(
    economicCalendar?.imminentEvents
  )
    ? economicCalendar.imminentEvents
    : [];

  const nextHighImpactEvent = useMemo(() => {
    return visibleEvents
      .filter((event) => {
        const importance = String(event?.importance || "").trim().toUpperCase();
        const target = new Date(event?.time).getTime();
        return importance === "HIGH" && Number.isFinite(target) && target > now;
      })
      .sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime())[0] || null;
  }, [visibleEvents, now]);

  return (
    <section className="afriforex-panel afriforex-economic-calendar">
      <div className="afriforex-panel-heading">
        <div>
          <span className="afriforex-label afriforex-economic-calendar-label">
            AFRIFOREX ECONOMIC CALENDAR
          </span>
          <h2 className="afriforex-economic-calendar-title">
            Forex &amp; Crypto
          </h2>
        </div>
      </div>

      <div className="afriforex-economic-calendar-body">
        <div className="afriforex-economic-calendar-market-switch">
          <button
            type="button"
            className={`afriforex-economic-calendar-market ${
              activeMarket === "FOREX" ? "is-active" : ""
            }`}
            onClick={() => setActiveMarket("FOREX")}
          >
            <span className="afriforex-label">FOREX</span>
            <strong>Economic events</strong>
          </button>

          <button
            type="button"
            className={`afriforex-economic-calendar-market ${
              activeMarket === "CRYPTO" ? "is-active" : ""
            }`}
            onClick={() => setActiveMarket("CRYPTO")}
          >
            <span className="afriforex-label">CRYPTO</span>
            <strong>Market events</strong>
          </button>
        </div>

        <div className="afriforex-economic-calendar-results">
          <span className="afriforex-label">
            {activeMarket} ECONOMIC CALENDAR
          </span>

          {status !== "AVAILABLE" ? (
            <>
              <strong>
                ECONOMIC CALENDAR {status}
              </strong>

              <span>
                {economicCalendar?.reason ||
                  "Economic calendar data is currently unavailable."}
              </span>
            </>
          ) : (
            <>
              <strong>
                {selectedMarket || "MARKET"} · {riskLevel} RISK
              </strong>

              <span>
                {economicCalendar.eventCount ?? visibleEvents.length} relevant
                events · {economicCalendar.highImpactEventCount ?? 0} high impact
              </span>

              {nextHighImpactEvent ? (
                <div className="afriforex-economic-calendar-next-event">
                  <span className="afriforex-label">NEXT HIGH-IMPACT EVENT</span>
                  <strong>{nextHighImpactEvent.name || "Economic event"}</strong>
                  <span>
                    {nextHighImpactEvent.currency || nextHighImpactEvent.countryCode || "GLOBAL"}
                    {" · "}
                    {formatEventTime(nextHighImpactEvent.time)}
                  </span>
                  <strong>COUNTDOWN · {formatCountdown(nextHighImpactEvent.time, now)}</strong>
                </div>
              ) : null}

              {economicCalendar.imminent ? (
                <span>
                  HIGH-IMPACT EVENT IMMINENT ·{" "}
                  {imminentEvents.length} event
                  {imminentEvents.length === 1 ? "" : "s"}
                </span>
              ) : null}

              {visibleEvents.length > 0 ? (
                <div className="afriforex-economic-calendar-event-list">
                  {visibleEvents.slice(0, 8).map((event) => (
                    <article
                      className="afriforex-economic-calendar-event"
                      key={
                        event.id ||
                        event.eventId ||
                        `${event.time}-${event.name}`
                      }
                    >
                      <div>
                        <span className="afriforex-label">
                          {event.importance || "UNKNOWN"} ·{" "}
                          {event.currency || event.countryCode || "GLOBAL"}
                        </span>

                        <strong>{event.name || "Economic event"}</strong>

                        <span>
                          {formatEventTime(event.time)}
                          {" · "}
                          {formatMinutes(event.minutesUntil)}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <span>NO RELEVANT ECONOMIC EVENTS</span>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
