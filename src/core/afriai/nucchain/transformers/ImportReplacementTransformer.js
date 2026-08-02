const ImportReplacementTransformer = {

  transform({
    content,
    from,
    to
  } = {}){

    if(!content){
      return {
        transformed:false,
        reason:"CONTENT_REQUIRED"
      };
    }

    if(!from || !to){
      return {
        transformed:false,
        reason:"PATH_REQUIRED"
      };
    }

    const updated = content.replaceAll(from,to);

    return {
      transformed: updated !== content,
      original: content,
      updated,
      from,
      to,
      timestamp: Date.now()
    };

  }

};

export default ImportReplacementTransformer;
