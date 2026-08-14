let counter = 0;

const AfriNexusIdGenerator = {
  create(prefix = "AFN") {
    counter++;

    return `${prefix}-${Date.now()}-${counter}`;
  }
};

export default AfriNexusIdGenerator;
