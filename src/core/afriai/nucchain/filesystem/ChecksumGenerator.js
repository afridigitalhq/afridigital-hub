import { readFile } from "node:fs/promises";
import crypto from "node:crypto";

const ChecksumGenerator = {

  async generate(file){

    const content =
      await readFile(file);

    return crypto
      .createHash("sha256")
      .update(content)
      .digest("hex");

  }

};

export default ChecksumGenerator;
