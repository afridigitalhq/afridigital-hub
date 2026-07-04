const fs=require("fs");
const path=require("path");

const roots=["src"];
const legacy=[];
const modern=[];
const duplicate=[];

function walk(dir){
  if(!fs.existsSync(dir)) return;
  for(const e of fs.readdirSync(dir)){
    const p=path.join(dir,e);
    const st=fs.statSync(p);

    if(st.isDirectory()){
      walk(p);
      continue;
    }

    if(!/\.(js|jsx|cjs|ts|tsx)$/.test(p)) continue;

    const s=fs.readFileSync(p,"utf8");

    if(
      s.includes("modules/afrivision") ||
      s.includes("AfriVisionWindow") ||
      s.includes("AfriVisionDashboardRuntime")
    ){
      legacy.push(p);
    }

    if(
      s.includes("modules/afrimonitor") ||
      s.includes("AfriMonitorWindow") ||
      s.includes("AfriMonitorDashboardRuntime")
    ){
      modern.push(p);
    }
  }
}

roots.forEach(walk);

[
["src/landing_v3/modules/afrivision","src/landing_v3/modules/afrimonitor"],
["src/landing_v3/modules/AfriVisionWindow.jsx","src/landing_v3/modules/AfriMonitorWindow.jsx"]
].forEach(([oldPath,newPath])=>{
  if(fs.existsSync(oldPath)&&fs.existsSync(newPath)){
    duplicate.push([oldPath,newPath]);
  }
});

console.log("\n🧊 ARCHITECTURE FREEZE AUDIT");
console.log("============================");

console.log("\n📦 Legacy references:",legacy.length);
legacy.forEach(x=>console.log("🟡",x));

console.log("\n✅ Modern references:",modern.length);
modern.forEach(x=>console.log("🟢",x));

console.log("\n📁 Duplicate assets:",duplicate.length);
duplicate.forEach(x=>console.log("📄",x[0],"⇄",x[1]));

console.log("\n🏁 FREEZE STATUS");
if(legacy.length===0)
  console.log("✅ No legacy runtime imports detected.");
else
  console.log("🟡 Legacy imports still exist.");

if(duplicate.length===0)
  console.log("✅ No duplicate runtime assets.");
else
  console.log("🟡 Duplicate runtime assets exist (safe cleanup candidate).");
