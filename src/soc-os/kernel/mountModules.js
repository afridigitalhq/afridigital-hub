export function mountModules(kernel) {

  return {
    warroom: () => import("../../warroom/WarRoomShell"),
    admin: () => import("../../admin/AdminShell"),
    dag: () => import("../../dag-ui/DAGView"),
  };

}
