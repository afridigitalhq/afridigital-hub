import { mkdir } from "node:fs/promises";

const DirectoryCreator = {

  async create(path){

    await mkdir(path,{
      recursive:true
    });

    return {
      created:true,
      path,
      timestamp:Date.now()
    };

  }

};

export default DirectoryCreator;
