import API from "../../../config/api";

export const AFRIFOREX_DEMO_CUSTOMER_ID = "guest";

async function request(path) {
  const response = await fetch(`${API.afriforex}${path}`);

  if (!response.ok) {
    throw new Error(`AfriForex API HTTP ${response.status}`);
  }

  const json = await response.json();

  if (!json?.ok) {
    throw new Error(json?.error || "AfriForex API request failed");
  }

  return json.data;
}

export function getAfriForexAccount(customerId = "guest") {
  return request(`/account?customerId=${encodeURIComponent(customerId)}`);
}

export function getAfriForexPositions(customerId = "guest") {
  return request(`/positions?customerId=${encodeURIComponent(customerId)}`);
}

export function getAfriForexTradeHistory(customerId = "guest") {
  return request(`/history?customerId=${encodeURIComponent(customerId)}`);
}


export async function postAfriForexScan(customerId = "guest", markets = [], crossAssetEnabled = false) {
  const response = await fetch(`${API.afriforex}/scan`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ customerId, markets, crossAssetEnabled: crossAssetEnabled === true })
  });

  if (!response.ok) {
    throw new Error(`AfriForex API HTTP ${response.status}`);
  }

  const json = await response.json();

  if (!json?.ok) {
    throw new Error(json?.error || "AfriForex scan failed");
  }

  return json.data;
}

export async function closeAfriForexPosition(
  positionId,
  customerId = AFRIFOREX_DEMO_CUSTOMER_ID
) {
  const response = await fetch(`${API.afriforex}/close`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ customerId, positionId })
  });

  const json = await response.json();

  if (!response.ok || !json?.ok) {
    throw new Error(
      json?.error || `AfriForex API HTTP ${response.status}`
    );
  }

  return json.data;
}
