export function resolveDashboardFromNode(node) {
  if (!node) return "warroom";

  const type = node.type || node.data?.type;

  switch (type) {
    case "finance":
      return "afribank";

    case "security":
      return "security";

    case "ai":
      return "afriai";

    case "message":
      return "whatsapp";

    default:
      return "warroom";
  }
}
