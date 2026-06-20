export function bindWarMapToDAGPhysics(warMap, physicsEngine) {

  return function onEvent(event) {

    // ⚡ Inject physics into DAG
    const result = physicsEngine.inject(event);

    // 🌍 Convert physics state → visual state
    const stressMap = physicsEngine.getState();

    // 🔴 Update WarMap visual zones
    if (warMap?.update) {
      warMap.update({
        event,
        stressMap,
        energy: result.energy
      });
    }

    return result;
  };
}
