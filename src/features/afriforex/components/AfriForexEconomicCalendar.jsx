import React, { useState } from "react";

export default function AfriForexEconomicCalendar() {
  const [activeMarket, setActiveMarket] = useState("FOREX");

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

          <strong>
            ECONOMIC CALENDAR PROVIDER NOT CONNECTED
          </strong>

          <span>
            {activeMarket === "FOREX"
              ? "Forex economic events will appear here when the calendar provider is connected."
              : "Crypto market events will appear here when the calendar provider is connected."}
          </span>
        </div>
      </div>
    </section>
  );
}
