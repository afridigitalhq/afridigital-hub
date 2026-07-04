const fs=require("fs");
const path=require("path");

const ops=[
[
"src/landing_v3/streams/useAfriVisionStream.js",
"src/landing_v3/streams/useAfriMonitorStream.js"
],
[
"src/core/afrivision/hooks/useAfriVisionStream.js",
"src/core/afrimonitor/hooks/useAfriMonitorStream.js"
]
];

for(const [,dest] of ops){
fs.mkdirSync(path.dirname(dest),{recursive:true});
}

for(const [src,dest] of ops){
if(fs.existsSync(src)){
fs.copyFileSync(src,dest);
console.log("✅",src,"→",dest);
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
s=s.replace(/useAfriVisionStream/g,"useAfriMonitorStream");
s=s.replace(/["']([^"']*)useAfriVisionStream(["'])/g,(m,a,b)=>m.replace("useAfriVisionStream","useAfriMonitorStream"));
if(s!==old){
fs.writeFileSync(p,s);
console.log("🔄 Updated:",p);
}
}
}
}

walk("src");

console.log("\n📊 Remaining legacy references:");
let remaining=0;
(function scan(dir){
if(!fs.existsSync(dir)) return;
for(const e of fs.readdirSync(dir)){
const p=path.join(dir,e);
const st=fs.statSync(p);
if(st.isDirectory()) scan(p);
else if(/\.(js|jsx|cjs|ts|tsx)$/.test(p)){
const t=fs.readFileSync(p,"utf8");
if(t.includes("useAfriVisionStream")){
remaining++;
console.log("❗",p);
}
}
}
})("src");

console.log("\nRemaining:",remaining);
