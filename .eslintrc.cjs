module.exports = {
  rules: {
    "no-whatsapp-direct-links": {
      create(context) {
        return {
          Literal(node) {
            if (
              typeof node.value === "string" &&
              (node.value.includes("wa.me") || node.value.includes("whatsapp://"))
            ) {
              context.report({
                node,
                message: "Use AfriWhatsappCTA only. Direct WhatsApp links are blocked."
              });
            }
          }
        };
      }
    }
  }
};
