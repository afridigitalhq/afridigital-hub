const express = require('express');
const app = express();

const whatsappGateway = require('./services/whatsapp-gateway/server');

app.use(express.json());

app.get('/health', (req, res) => {
app.get('/debug/env', (req,res)=>res.json({
hasToken: !!process.env.WA_TOKEN,
hasPhoneId: !!process.env.WA_PHONE_NUMBER_ID,
nodeEnv: process.env.NODE_ENV,
port: process.env.PORT,
keys: Object.keys(process.env).filter(k=>k.includes('WA')||k.includes('TOKEN')||k.includes('PHONE'))
}));
  res.json({ ok: true });
});

app.use('/whatsapp', whatsappGateway);

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("🚀 AFRIAI SERVER RUNNING ON PORT", PORT);
});

module.exports = app;
