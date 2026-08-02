import FilesystemVerificationEngine from "./FilesystemVerificationEngine.js";

const FilesystemEvidenceCollector = {

  async collect(files = []){

    const verification =
      await FilesystemVerificationEngine.verify(files);

    return {
      status:"EVIDENCE_COLLECTED",
      evidence:verification.files,
      count:verification.count,
      collectedAt:Date.now()
    };

  }

};

export default FilesystemEvidenceCollector;
