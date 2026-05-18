function normalizeMsg(body) {

  const waMsg = body?.entry?.[0]?.changes?.[0]?.value?.messages?.[0];

  if (waMsg) {
    return {
      from: waMsg.from || null,
      text: waMsg.text?.body || "",
      type: waMsg.type || "text",
      raw: waMsg
    };
  }

  if (body?.from && body?.text) {
    return {
      from: body.from,
      text: body.text,
      type: "test",
      raw: body
    };
  }

  return null;
}

module.exports = normalizeMsg;
