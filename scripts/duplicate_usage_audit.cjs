const fs=require("fs");
const path=require("path");

const targets=[
"AfriVisionWindow",
"modules/afrivision",
"AfriVisionDashboardRuntime",
"AfriMonitorWindow",
"modules/afrimonitor",
"AfriMonitorDashboardRuntime"
];

const hits=[];

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

    for(const t of targets){
      if(s.includes(t)){
        hits.push([t,p]);
      }
    }
  }
}

walk("src");

console.log("\n📋 DUPLICATE USAGE AUDIT\n");

const grouped={};
for(const [k,p] of hits){
  if(!grouped[k]) grouped[k]=[];
  grouped[k].push(p);
}

for(const k of targets){
  console.log("====================================");
  console.log(k);
  console.log("References:",(grouped[k]||[]).length);
  (grouped[k]||[]).forEach(f=>console.log(" •",f));
}
