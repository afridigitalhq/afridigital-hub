export class TaskManager {
  constructor() {
    this.tasks = [];
  }

  register(app) {
    this.tasks.push({
      id: app.id,
      name: app.name,
      status: "running"
    });
  }

  list() {
    return this.tasks;
  }

  switch(id) {
    return this.tasks.find(t => t.id === id);
  }
}
