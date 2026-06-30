export class Win11StartMenuSearchEngine {
  constructor(apps = []) {
    this.apps = apps;
    this.latency = 120; // simulate OS delay
  }

  search(query) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(
          this.apps.filter(a =>
            a.name.toLowerCase().includes(query.toLowerCase())
          )
        );
      }, this.latency);
    });
  }
}
