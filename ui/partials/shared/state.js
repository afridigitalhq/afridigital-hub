export async function getState() {
  try {
    const res = await fetch('http://127.0.0.1:3000/afrid/state');
    return await res.json();
  } catch (e) {
    return { mode: "USER", error: true };
  }
}
