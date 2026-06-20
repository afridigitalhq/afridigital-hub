export function bootOS({ brain, dag, registry, sidebar }) {

  if (!brain || !dag || !registry || !sidebar) {
    throw new Error("OS Boot failed: missing core modules");
  }

  const OS = {
    brain,
    dag,
    registry,
    sidebar,

    start() {
      console.log("🧠 AFRIDIGITAL OS ONLINE");

      dag.subscribe((event) => {
        const decision = brain.route(event);

        if (!decision) return;

        dag.commit(event);
        sidebar.sync(decision.ui);
        registry.validate(decision.plugin);

        if (decision.narrator) {
          console.log("🔊 NARRATOR:", decision.narrator);
        }
      });
    }
  };

  return OS;
}
