import { readFile } from "node:fs/promises";

const FileReader={

async read(path){
const content=await readFile(path,"utf8");
return{read:true,path,content,size:Buffer.byteLength(content,"utf8"),timestamp:Date.now()};
}

};

export default FileReader;
