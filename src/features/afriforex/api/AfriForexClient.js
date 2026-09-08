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


export async function postAfriForexScan(customerId = "guest", markets = []) {
  const response = await fetch(`${API.afriforex}/scan`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ customerId, markets })
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
