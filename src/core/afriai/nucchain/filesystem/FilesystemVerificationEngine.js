import FileExistenceVerifier from "./FileExistenceVerifier.js";
import ChecksumGenerator from "./ChecksumGenerator.js";

const FilesystemVerificationEngine = {

  async verify(files = []){

    const results = [];

    for(const file of files){

      const exists =
        await FileExistenceVerifier.verify(file);

      const checksum =
        exists.exists
          ? await ChecksumGenerator.generate(file)
          : null;

      results.push({
        path:file,
        exists:exists.exists,
        checksum,
        timestamp:Date.now()
      });

    }

    return {
      status:"VERIFIED",
      files:results,
      count:results.length,
      timestamp:Date.now()
    };

  }

};

export default FilesystemVerificationEngine;
