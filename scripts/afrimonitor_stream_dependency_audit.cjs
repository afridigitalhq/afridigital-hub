const fs=require("fs");
const path=require("path");

const hits=[];

function walk(dir){
  if(!fs.existsSync(dir)) return;

  for(const item of fs.readdirSync(dir)){
    const file=path.join(dir,item);
    const stat=fs.statSync(file);

    if(stat.isDirectory()){
      walk(file);
      continue;
    }

    if(!/\.(js|jsx|ts|tsx|cjs)$/.test(file)) continue;

    const src=fs.readFileSync(file,"utf8");

    if(
      src.includes("useAfriVisionStream") ||
      src.includes("from \"../streams/useAfriVisionStream\"") ||
      src.includes("from './useAfriVisionStream'") ||
      src.includes("from \"./useAfriVisionStream\"")
    ){
      hits.push(file);
    }
  }
}

walk("src");

console.log("\n📡 AfriMonitor Stream Dependency Audit");
console.table(hits);
console.log("\nTotal imports:",hits.length);
