export class Win11StartMenuSearchLatencyEngine {

  async search(query) {

    // fake Win11 search delay illusion (safe UI realism only)
    await new Promise(r => setTimeout(r, 180));

    return {
      query,
      results: ["apps", "settings", "files"],
      latency: "win11_simulated"
    };
  }

}
