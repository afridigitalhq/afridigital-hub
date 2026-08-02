import { writeFile } from "node:fs/promises";

const FileWriter = {

  async write(path, content = ""){

    await writeFile(
      path,
      content,
      "utf8"
    );

    return {
      written:true,
      path,
      size:Buffer.byteLength(content,"utf8"),
      timestamp:Date.now()
    };

  }

};

export default FileWriter;
