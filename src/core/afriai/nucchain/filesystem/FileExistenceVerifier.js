import { access } from "node:fs/promises";

const FileExistenceVerifier = {

  async verify(path){

    try{

      await access(path);

      return {
        exists:true,
        path,
        timestamp:Date.now()
      };

    }catch(error){

      return {
        exists:false,
        path,
        error:error.message,
        timestamp:Date.now()
      };

    }

  }

};

export default FileExistenceVerifier;
