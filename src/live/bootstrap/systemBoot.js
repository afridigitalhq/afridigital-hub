export async function systemBoot({ setReady }) {
  try {
    // Step 1: wait for backend
    await fetch("/health").catch(() => {});

    // Step 2: delay socket stabilization
    await new Promise(r => setTimeout(r, 800));

    // Step 3: unlock system UI
    setReady(true);
  } catch (e) {
    console.error("Boot failed", e);
    setReady(true); // fail-safe
  }
}
