const AfriNexusPermissionMatrix = {
  VISITOR: {
    diagnose: false,
    explain: true,
    submitReport: true,
    approveRepair: false,
    execute: false
  },
  USER: {
    diagnose: true,
    explain: true,
    submitReport: true,
    approveRepair: false,
    execute: false
  },

  CLIENT: {
    diagnose: true,
    explain: true,
    submitReport: true,
    approveRepair: true,
    execute: false
  },

  ADMIN: {
    diagnose: true,
    explain: true,
    approveRepair: true,
    execute: true,
    override: true
  }
};

export default AfriNexusPermissionMatrix;
