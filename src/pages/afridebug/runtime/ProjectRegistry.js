const projects=[];

export function registerProject(project){
  projects.push({
    id:Date.now().toString(),
    status:"registered",
    ...project
  });

  return projects[projects.length-1];
}

export function getProjects(){
  return projects;
}
