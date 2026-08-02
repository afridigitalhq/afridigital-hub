import FileReader from "./FileReader.js";
import FileCreator from "./FileCreator.js";

const FilesystemPatchEngine = {

async patch({
file,
content,
replace = false
} = {}){

if(!file){
return {
patched:false,
reason:"FILE_REQUIRED",
timestamp:Date.now()
};
}

let previous=null;

try{
previous = await FileReader.read(file);
}catch(e){
previous=null;
}

if(previous && !replace){
return {
patched:false,
reason:"FILE_EXISTS",
file,
timestamp:Date.now()
};
}

const result = await FileCreator.create(
file,
content || ""
);

return {
patched:true,
file,
previous,
result,
timestamp:Date.now()
};

}

};

export default FilesystemPatchEngine;
