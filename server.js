process.on("uncaughtException", e => console.error("CRASH:", e));
const { log } = require("./services/whatsapp-gateway/core/utils/logger");
console.log('🚀 SERVER STARTED')
const startWorker = require("./services/whatsapp-gateway/core/delivery/worker"); startWorker();
console.log('🔥 SERVER IS ALIVE ON PORT 3000');
process.on("uncaughtException",e=>console.error("🔥",e));process.on("unhandledRejection",e=>console.error("🔥",e));
const express=require('express');
const app=express();

app.use(express.json());

app.get('/health',(req,res)=>res.json({ok:true}));

// WHATSAPP GATEWAY
const whatsappGateway=require('./services/whatsapp-gateway/server');
app.use('/whatsapp',whatsappGateway);

// TOOLS FIX (GLOBAL MOUNT INSIDE GATEWAY)
const envCheck=require('./services/whatsapp-gateway/tools/envCheck');
app.use('/whatsapp/tools',envCheck);

module.exports=app;
app.listen(process.env.PORT || 3000, "0.0.0.0", () => {
  console.log("🔥 SERVER RUNNING");
  console.log("🚀 AFRIAI RUNNING ON PORT", process.env.PORT);
});
