console.log("🔥 WA ENV CHECK:");
console.log({
  WA_TOKEN: process.env.WA_TOKEN?.slice(0,10),
  WA_PHONE_NUMBER_ID: process.env.WA_PHONE_NUMBER_ID,
  PORT: process.env.PORT
});
