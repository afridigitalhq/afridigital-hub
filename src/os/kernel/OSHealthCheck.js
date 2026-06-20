export function OSHealthCheck(os) {
  return {
    brain: !!os?.brain,
    dag: !!os?.dag,
    registry: !!os?.registry,
    sidebar: !!os?.sidebar,
    status: "OK"
  };
}
