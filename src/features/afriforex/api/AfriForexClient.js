import API from "../../../config/api";

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
