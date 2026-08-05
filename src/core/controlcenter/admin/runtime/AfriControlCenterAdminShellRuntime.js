import Shell from "../../frontend/shell/AfriControlCenterDashboardShellContract.js";

const AfriControlCenterAdminShellRuntime = {

  shell(){

    return Shell.dashboard();

  },


  sections(){

    return Shell.sections();

  },


  admin(){

    return {

      name:"AfriControlCenter Admin",

      shell:
        this.shell(),

      sections:
        this.sections()

    };

  },


  health(){

    return {

      service:"AfriControlCenterAdminShellRuntime",

      status:"healthy"

    };

  }

};

export default AfriControlCenterAdminShellRuntime;
