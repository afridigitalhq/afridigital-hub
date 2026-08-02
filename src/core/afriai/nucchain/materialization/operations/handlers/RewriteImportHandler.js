import FileReader from "../../../filesystem/FileReader.js";
import FilesystemPatchEngine from "../../../filesystem/FilesystemPatchEngine.js";

const RewriteImportHandler = {

  async execute({
    file,
    from,
    to
  } = {}) {

    const current = await FileReader.read(file);

    const updated = current.content.replace(
      from,
      to
    );

    return await FilesystemPatchEngine.patch({
      file,
      content: updated,
      replace: true
    });

  }

};

export default RewriteImportHandler;
