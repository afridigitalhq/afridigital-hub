export function rollbackDeploy(commitId) {
  console.log("Rolling back to:", commitId);
  return fetch("/api/rollback", {
    method: "POST",
    body: JSON.stringify({ commitId })
  });
}
