export default async function mountControlCenter() {
  const root = document.getElementById("app") || document.body;

  let state = {};
  try {
    state = await fetch("/afrid/state").then(r => r.json());
  } catch (e) {}

  root.innerHTML = `
    <div style="padding:20px;font-family:Arial">
      <h2>⚡ CONTROL CENTER</h2>
      <p>🧠 MODE: ${state.mode || "DEVOPS"}</p>
      <p>🔒 LOCK: ${state.lock || "0"}</p>
      <p>🌍 DEPLOY: ${state.deploy || "https://afridigital-hub.onrender.com"}</p>
    </div>
  `;
}
