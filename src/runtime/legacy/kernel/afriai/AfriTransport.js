export const AfriTransport = {
  baseURL: "https://afridigital-api.onrender.com",

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
