export async function rollback(lastGoodCommit) {
  console.log("🔁 Rolling back to:", lastGoodCommit);
  return { status: "rollback_triggered", commit: lastGoodCommit };
}
