function normalizeMsg(body) {
  const msg = body?.entry?.[0]?.changes?.[0]?.value?.messages?.[0];

  if (!msg) return null;

  return {
    from: msg.from || null,
    text: msg.text?.body || "",
    raw: msg
  };
}

module.exports = normalizeMsg;
