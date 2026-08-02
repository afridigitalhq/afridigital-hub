import fs from "fs/promises";
import path from "path";

const AfriNucChainSourceDiscoveryEngine = {

  async scan(directory){

    const files = [];

    async function walk(current){

      const entries = await fs.readdir(
        current,
        {withFileTypes:true}
      );

      for(const entry of entries){

        const fullPath =
          path.join(current, entry.name);

        if(entry.isDirectory()){

          await walk(fullPath);

        }else{

          files.push(fullPath);

        }

      }

    }

    await walk(directory);

    return {
      directory,
      files,
      count: files.length,
      discoveredAt: Date.now()
    };

  }

};

export default AfriNucChainSourceDiscoveryEngine;
