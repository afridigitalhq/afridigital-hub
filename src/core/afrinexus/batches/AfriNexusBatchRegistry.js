const batches = new Map();

const AfriNexusBatchRegistry = {
  create(batch = {}) {
    const id = `AFN-${Date.now()}`;

    const record = {
      id,
      status: "CREATED",
      createdAt: Date.now(),
      ...batch
    };

    batches.set(id, record);

    return record;
  },

  update(id, status, data = {}) {
    const batch = batches.get(id);

    if (!batch) {
      return {
        status: "not_found",
        id
      };
    }

    const updated = {
      ...batch,
      status,
      ...data,
      updatedAt: Date.now()
    };

    batches.set(id, updated);

    return updated;
  },

  get(id) {
    return batches.get(id) || null;
  },

  list() {
    return Array.from(batches.values());
  }
};

export default AfriNexusBatchRegistry;
