const operations = [
  {
    type: "UPDATE_FILE",
    description: "Update existing file content"
  },
  {
    type: "MOVE_FILE",
    description: "Move file from source to target"
  },
  {
    type: "REMOVE_FILE",
    description: "Remove deprecated file"
  },
  {
    type: "REWRITE_IMPORT",
    description: "Rewrite import references"
  }
];

const AfriNucChainOperationRegistry = {
  all() {
    return operations;
  },

  exists(type) {
    return operations.some(
      operation => operation.type === type
    );
  }
};

export default AfriNucChainOperationRegistry;
