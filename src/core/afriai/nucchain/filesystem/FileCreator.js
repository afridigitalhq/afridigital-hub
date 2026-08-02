import path from "node:path";
import DirectoryCreator from "./DirectoryCreator.js";
import FileWriter from "./FileWriter.js";

const FileCreator={

async create(file,content=""){
await DirectoryCreator.create(path.dirname(file));
return await FileWriter.write(file,content);
}

};

export default FileCreator;
