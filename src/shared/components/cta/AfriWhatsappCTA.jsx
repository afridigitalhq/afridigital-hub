export default function AfriWhatsappCTA({ label = "Open AfriWhatsapp", context = "general", module = "unknown" }) {
  const open = () => {
    window.location.href = "/afriwhatsapp?context=" + encodeURIComponent(context) + "&module=" + encodeURIComponent(module);
  };

  return (
    <button onClick={open}>
      {label}
    </button>
  );
}
