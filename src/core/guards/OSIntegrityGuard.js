export function enforceOSIntegrity() {
  if (window.__AFRI_OS_LOCKED__) return;

  window.__AFRI_OS_LOCKED__ = true;

  window.addEventListener("error", (e) => {
    console.warn("OS Integrity Alert:", e.message);
  });
}
