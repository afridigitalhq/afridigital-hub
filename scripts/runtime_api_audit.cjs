const fs=require("fs");

[
"src/core/afrivision/hooks/useAfriVisionStream.js",
"src/landing_v3/streams/useAfriVisionStream.js"
].forEach(f=>{
  console.log("\n================================================");
  console.log(f);
  console.log("================================================");
  if(fs.existsSync(f)){
    console.log(fs.readFileSync(f,"utf8"));
  }else{
    console.log("MISSING");
  }
});
