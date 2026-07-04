const fs=require("fs");
const path=require("path");

const renames=[
["src/landing_v3/modules/afrivision","src/landing_v3/modules/afrimonitor"],
["src/landing_v3/modules/AfriVisionWindow.jsx","src/landing_v3/modules/AfriMonitorWindow.jsx"]
];

for(const [src,dst] of renames){
  if(fs.existsSync(src)){
    fs.mkdirSync(path.dirname(dst),{recursive:true});
    fs.cpSync(src,dst,{recursive:true});
    console.log("✅",src,"→",dst);
  }else{
    console.log("⚠️ Missing:",src);
  }
}

function walk(dir){
  if(!fs.existsSync(dir)) return;
  for(const e of fs.readdirSync(dir)){
    const p=path.join(dir,e);
    const st=fs.statSync(p);
    if(st.isDirectory()) walk(p);
    else if(/\.(js|jsx|cjs|ts|tsx)$/.test(p)){
      let s=fs.readFileSync(p,"utf8");
      const old=s;

      s=s.replace(/AfriVisionDashboardRuntime/g,"AfriMonitorDashboardRuntime");
      s=s.replace(/AfriVisionWindow/g,"AfriMonitorWindow");
      s=s.replace(/modules\/afrivision/g,"modules/afrimonitor");
      s=s.replace(/AfriVisionLiveFeed/g,"AfriMonitorLiveFeed");

      if(s!==old){
        fs.writeFileSync(p,s);
        console.log("🔄 Updated:",p);
      }
    }
  }
}

walk("src");

console.log("\n📋 Remaining runtime references:");
let count=0;

(function scan(dir){
  if(!fs.existsSync(dir)) return;
  for(const e of fs.readdirSync(dir)){
    const p=path.join(dir,e);
    const st=fs.statSync(p);
    if(st.isDirectory()) scan(p);
    else if(/\.(js|jsx|cjs|ts|tsx)$/.test(p)){
      const t=fs.readFileSync(p,"utf8");
      if(
        t.includes("AfriVisionDashboardRuntime") ||
        t.includes("AfriVisionWindow")
      ){
        console.log("❗",p);
        count++;
      }
    }
  }
})("src");

console.log("\nRemaining runtime references:",count);
