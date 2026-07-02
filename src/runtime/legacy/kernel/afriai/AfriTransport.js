export const AfriTransport = {
  baseURL: "API.base",

  async request(path, body) {
    const res = await fetch(`${this.baseURL}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    return res.json();
  }
};
