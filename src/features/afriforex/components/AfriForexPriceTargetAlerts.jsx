import React, { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "afriforex:priceTargetAlerts";

function normalizeSymbol(value) {
  return String(value || "").trim().toUpperCase();
}

function readAlerts() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function getRealtimePrice(marketUpdate, latestActivity, tradeAlert) {
  const candidates = [
    marketUpdate?.price,
    marketUpdate?.currentPrice,
    latestActivity?.data?.signal?.price,
    latestActivity?.data?.price,
    tradeAlert?.signal?.price,
    tradeAlert?.price
  ];

  for (const value of candidates) {
    const price = Number(value);
    if (Number.isFinite(price) && price > 0) return price;
  }

  const candles = marketUpdate?.candles;
  if (Array.isArray(candles) && candles.length) {
    const close = Number(candles[candles.length - 1]?.close);
    if (Number.isFinite(close) && close > 0) return close;
  }

  return null;
}

function hasCrossed(previousPrice, currentPrice, condition, target) {
  if (!Number.isFinite(currentPrice) || !Number.isFinite(target)) {
    return false;
  }

  if (!Number.isFinite(previousPrice)) {
    return condition === "ABOVE"
      ? currentPrice >= target
      : currentPrice <= target;
  }

  if (condition === "ABOVE") {
    return previousPrice < target && currentPrice >= target;
  }

  return previousPrice > target && currentPrice <= target;
}

export default function AfriForexPriceTargetAlerts({
  selectedMarket,
  marketUpdate,
  latestActivity,
  tradeAlert,
  notificationsEnabled,
  notificationPermission,
  playNotificationSound
}) {
  const [alerts, setAlerts] = useState(readAlerts);
  const [priceTargetNotifications, setPriceTargetNotifications] = useState(
    () => localStorage.getItem("afriforex:priceTargetNotifications") === "ON"
  );
  const [condition, setCondition] = useState("ABOVE");
  const [target, setTarget] = useState("");
  const [previousPrices, setPreviousPrices] = useState({});

  const selectedSymbol = normalizeSymbol(selectedMarket);

  useEffect(() => {
    localStorage.setItem(
      "afriforex:priceTargetNotifications",
      priceTargetNotifications ? "ON" : "OFF"
    );
  }, [priceTargetNotifications]);

  const currentPrice = useMemo(
    () => getRealtimePrice(marketUpdate, latestActivity, tradeAlert),
    [marketUpdate, latestActivity, tradeAlert]
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(alerts));
  }, [alerts]);

  useEffect(() => {
    if (!selectedSymbol || !Number.isFinite(currentPrice)) return;

    const previousPrice = previousPrices[selectedSymbol];

    setPreviousPrices((current) => ({
      ...current,
      [selectedSymbol]: currentPrice
    }));

    setAlerts((current) => {
      let changed = false;

      const next = current.map((alert) => {
        if (
          alert.status !== "ARMED" ||
          alert.symbol !== selectedSymbol ||
          !hasCrossed(previousPrice, currentPrice, alert.condition, alert.target)
        ) {
          return alert;
        }

        changed = true;

        if (
          priceTargetNotifications &&
          notificationPermission === "granted" &&
          "Notification" in window
        ) {
          const direction =
            alert.condition === "ABOVE" ? "reached/above" : "reached/below";

          const title = `AfriAI Price Target — ${alert.symbol}`;
          const body = `${alert.symbol} ${direction} ${alert.target}. Current price: ${currentPrice}`;

          try {
            playNotificationSound?.();

            if ("serviceWorker" in navigator) {
              navigator.serviceWorker.ready
                .then((registration) =>
                  registration.showNotification(title, {
                    body,
                    tag: `afriai-price-target-${alert.id}`,
                    renotify: true,
                    data: {
                      type: "AFRIAI_PRICE_TARGET",
                      alert
                    }
                  })
                )
                .catch(() => {
                  new Notification(title, { body });
                });
            } else {
              new Notification(title, { body });
            }
          } catch {
            // Notification failure must not break price monitoring.
          }
        }

        return {
          ...alert,
          status: "TRIGGERED",
          triggeredAt: new Date().toISOString(),
          triggeredPrice: currentPrice
        };
      });

      return changed ? next : current;
    });
  }, [
    selectedSymbol,
    currentPrice,
    priceTargetNotifications,
    notificationPermission,
    playNotificationSound,
    previousPrices
  ]);

  const addAlert = () => {
    const numericTarget = Number(String(target).replace(/,/g, ""));

    if (!selectedSymbol || !Number.isFinite(numericTarget) || numericTarget <= 0) {
      return;
    }

    const alert = {
      id: `price_target_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      symbol: selectedSymbol,
      condition,
      target: numericTarget,
      status: "ARMED",
      createdAt: new Date().toISOString()
    };

    setAlerts((current) => [...current, alert]);
    setTarget("");
  };

  const removeAlert = (id) => {
    setAlerts((current) => current.filter((alert) => alert.id !== id));
  };

  const rearmAlert = (id) => {
    setAlerts((current) =>
      current.map((alert) =>
        alert.id === id
          ? {
              ...alert,
              status: "ARMED",
              triggeredAt: null,
              triggeredPrice: null
            }
          : alert
      )
    );
  };

  const visibleAlerts = alerts.filter(
    (alert) => !selectedSymbol || alert.symbol === selectedSymbol
  );

  return (
    <section className="afriforex-card afriforex-price-target-card">
      <div className="afriforex-card-header">
        <div>
          <h2>🔔 Price Target Alerts</h2>
          <p>
            Set independent price notifications for the selected asset.
          </p>
        </div>
        <div className="afriforex-price-target-notification-control">
          <span className="afriforex-status-pill">
            {priceTargetNotifications ? "Notifications ON" : "Notifications OFF"}
          </span>
          <button
            type="button"
            onClick={async () => {
              if (priceTargetNotifications) {
                setPriceTargetNotifications(false);
                return;
              }

              if (!("Notification" in window)) {
                return;
              }

              let permission = Notification.permission;

              if (permission === "default") {
                permission = await Notification.requestPermission();
              }

              if (permission === "granted") {
                setPriceTargetNotifications(true);
              }
            }}
            aria-pressed={priceTargetNotifications}
          >
            {priceTargetNotifications ? "Turn OFF" : "Turn ON"}
          </button>
        </div>
        <span className="afriforex-status-pill">
          {currentPrice !== null ? `Price ${currentPrice}` : "Price unavailable"}
        </span>
      </div>

      <div className="afriforex-price-target-form">
        <strong>{selectedSymbol || "Select an asset"}</strong>

        <select
          value={condition}
          onChange={(event) => setCondition(event.target.value)}
          aria-label="Price target condition"
        >
          <option value="ABOVE">Above / At</option>
          <option value="BELOW">Below / At</option>
        </select>

        <input
          type="number"
          min="0"
          step="any"
          value={target}
          onChange={(event) => setTarget(event.target.value)}
          placeholder="Target price"
          aria-label="Target price"
        />

        <button type="button" onClick={addAlert}>
          OK
        </button>
      </div>

      <div className="afriforex-price-target-list">
        {visibleAlerts.length === 0 ? (
          <div className="afriforex-empty-state">
            No price targets armed for this asset.
          </div>
        ) : (
          visibleAlerts.map((alert) => (
            <div className="afriforex-price-target-row" key={alert.id}>
              <div>
                <strong>{alert.symbol}</strong>
                <span>
                  {alert.condition === "ABOVE" ? "≥" : "≤"}{" "}
                  {alert.target}
                </span>
              </div>

              <span className={`afriforex-status-pill ${alert.status.toLowerCase()}`}>
                {alert.status}
              </span>

              {alert.status === "TRIGGERED" && (
                <button type="button" onClick={() => rearmAlert(alert.id)}>
                  Re-arm
                </button>
              )}

              <button type="button" onClick={() => removeAlert(alert.id)}>
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
